using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Claims;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Helpers;
using Academy.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
namespace Academy.API.Controllers
{
    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAcademyRepository _repo;
        private readonly IMapper _mapper;
        private readonly AcademyDbContext _context;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly IHostingEnvironment _environment;

        public UsersController(IAcademyRepository repo, 
                               IMapper mapper,
                               AcademyDbContext context,
                                UserManager<User> userManager,
                                SignInManager<User> signInManager,
                                RoleManager<Role> roleManager,
                                IHostingEnvironment environment
                               )
        {
            _mapper = mapper;
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _environment = environment;
            _repo = repo;

        }
         [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            foreach(var user in users) 
            {
                if(user.UserImage != null)
                {
                    user.UserImage = BaseURL.GetBaseUrl(Request) + "/Upload/" + user.UserImage;
                }
            }
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name="GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            if(user.UserImage != null) 
            {
                user.UserImage = BaseURL.GetBaseUrl(Request) + "/Upload/" + user.UserImage;
            }
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);

            return Ok(userToReturn); 
        }
        //
         // get image for id
        [HttpGet("getImageData/{id}")]
        public async Task<IActionResult> GetImageData(int id)
        {
            var aUser = await _repo.GetUser(id);
            if (aUser != null)
            {
                if (!String.IsNullOrEmpty(aUser.UserImage))
                {
                    string path = Path.Combine(_environment.ContentRootPath, "Upload", aUser.UserImage);
                    try
                    {
                        byte[] bytes = System.IO.File.ReadAllBytes(path);
                        string base64Str = Convert.ToBase64String(bytes);
                        return Ok(new FileDataInfo
                        {
                            FileName = aUser.UserImage,
                            Extension = Path.GetExtension(aUser.UserImage),
                            Data = "data:image/*;base64;" + base64Str
                        });
                    }
                    catch
                    {

                    }
                }
                return NoContent();
            }
            return NotFound();
        }
        //
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id,[FromForm] UserForUpdateDto userForUpdateDto)
        {
            userForUpdateDto.UpdateBy = User.Identity.Name.ToString();
            userForUpdateDto.UpdateDate = DateTime.Now;
             if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
            var userFromRepo = await _repo.GetUser(id);
            if( userFromRepo == null) 
            {
                return NotFound();
            }
             // Gán tên thuộc tính hình của đối tượng trước khi cập nhật
            var file2 = userFromRepo.UserImage;
            
            string path = "";

            // Nếu thuộc tính hình có tồn tại thì set một đường link theo vị trí lưu hình 
            if (!String.IsNullOrEmpty(file2))
            path=Path.Combine(_environment.ContentRootPath, "Upload", file2);

            // Lấy tập tin mới được thêm vào
            var file = userForUpdateDto.File;

            // Kiểm tra tập tin đã tồn tại hay không
            if (!System.IO.File.Exists(path))
            {
                // Nếu chưa tồn tại, kiểm tra tập tin có rỗng không
                if (file != null)
                {
                    // Gán tên mới để lưu theo cú pháp mã khoá học + tên file
                    string newFileName = id + "_" + file.FileName;
                    // Tạo đường dẫn lưu file
                    string path2 = Path.Combine(_environment.ContentRootPath, "Upload", newFileName);

                    // Tiến hành lưu file
                    using (var stream = new FileStream(path2, FileMode.Create))
                    {
                        file.CopyTo(stream);
                        // Cập nhật tên hình
                        userForUpdateDto.UserImage = newFileName;
                        // Map dữ liệu và lưu những thay đổi
                        _mapper.Map(userForUpdateDto, userFromRepo);
                        await _repo.SaveAll();
                    }
                }
                // Nếu file null
                else {
                // Map dữ liệu và lưu những thay đổi
                _mapper.Map(userForUpdateDto, userFromRepo);
                  await _repo.SaveAll();
                }
                
                return Ok(userForUpdateDto);
            }
            else if (System.IO.File.Exists(path))
            {
                if (file != null)
                {
                    string newFileName = id + "_" + file.FileName;
                    string path2 = Path.Combine(_environment.ContentRootPath, "Upload", newFileName);
                    using (var stream = new FileStream(path2, FileMode.Create))
                    {
                        file.CopyTo(stream);
                        
                        userForUpdateDto.UserImage = newFileName;
                        _mapper.Map(userForUpdateDto, userFromRepo);
                        await _repo.SaveAll();
                        if (System.IO.File.Exists(path))
                            try { System.IO.File.Delete(path); } catch { }
                    }
                }
                else
                {
                    // !courseForUpdateDto.Image = null;
                    userForUpdateDto.UserImage = userFromRepo.UserImage;
                    _mapper.Map(userForUpdateDto, userFromRepo);
                    await _repo.SaveAll();

                }
                return Ok(userForUpdateDto);
            }
            return Ok(userForUpdateDto);

            // if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            //     return Unauthorized();

            // var userFromRepo = await _repo.GetUser(id);
            // var fileForImage = 
            // _mapper.Map(userForUpdateDto, userFromRepo);

            // if (await _repo.SaveAll())
            //     return NoContent();

            // throw new Exception($"Updating user {id} failed on save");
        }
    
        //  [HttpGet]
        // [Route("ExportXls")]
        // public async Task<HttpResponseMessage> ExportXls(HttpRequestMessage request, string filter = null)
        // {
        //     string fileName = string.Concat("Product_" + DateTime.Now.ToString("yyyyMMddhhmmsss") + ".xlsx");
        //     var folderReport = ConfigHelper.GetByKey("ReportFolder");
        //     string filePath = HttpContext.Current.Server.MapPath(folderReport);
        //     if (!Directory.Exists(filePath))
        //     {
        //         Directory.CreateDirectory(filePath);
        //     }
        //     string fullPath = Path.Combine(filePath, fileName);
        //     try
        //     {
        //         var data = _productService.GetListProduct(filter).ToList();
        //         await ReportHelper.GenerateXls(data, fullPath);
        //         return request.CreateErrorResponse(HttpStatusCode.OK, Path.Combine(folderReport, fileName));
        //     }
        //     catch (Exception ex)
        //     {
        //         return request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
        //     }
        // }
    
    
    //      [HttpGet]
    //     public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
    //     {
    //         var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

    //         var userFromRepo = await _repo.GetUser(currentUserId, true);

    //         userParams.UserId = currentUserId;

    //         if (string.IsNullOrEmpty(userParams.Gender))
    //         {
    //             userParams.Gender = userFromRepo.Gender == "male" ? "female" : "male";
    //         }

    //         var users = await _repo.GetUsers(userParams);

    //         var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

    //         // Response.AppApplicationError

    //         Response.AddPagination(users.CurrentPage, users.PageSize,
    //             users.TotalCount, users.TotalPages);

    //         return Ok(usersToReturn);
    //     }
    //     // 
    //    [HttpGet("{id}", Name = "GetUser")]
    //     public async Task<IActionResult> GetUser(int id)
    //     {
    //         var isCurrentUser = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value) == id;
            
    //         var user = await _repo.GetUser(id, isCurrentUser);

    //         var userToReturn = _mapper.Map<UserForDetailedDto>(user);

    //         return Ok(userToReturn);
    //     }
    //     //
    //     // get image for id

    //     //
        
    //     [HttpPut("{id}")]
    //     public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
    //     {
    //         if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
    //             return Unauthorized();

    //         var userFromRepo = await _repo.GetUser(id, true);

    //         _mapper.Map(userForUpdateDto, userFromRepo);

    //         if (await _repo.SaveAll())
    //             return NoContent();

    //         throw new Exception($"Updating user {id} failed on save");
    //     }

        // [HttpPut("{id}")]
        // public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        // {
        //     if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
        //         return Unauthorized();
        //      var userFromRepo = await _repo.GetUser(id);

        //     _mapper.Map(userForUpdateDto, userFromRepo);

        //     if (await _repo.SaveAll())
        //         return NoContent();

        //     throw new Exception($"Updating user {id} failed on save");
        // }
    }
}