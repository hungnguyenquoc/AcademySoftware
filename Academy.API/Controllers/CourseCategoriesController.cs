using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Helpers;
using Academy.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Academy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseCategoriesController : ControllerBase
    {
        private readonly ICourseCategoryRepository _repo;
        private readonly IMapper _mapper;
        private readonly IHostingEnvironment _environment;

        public CourseCategoriesController(ICourseCategoryRepository repo, IMapper mapper,
                                        IHostingEnvironment environment
)
        {
            _environment = environment;
            _repo = repo;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetCourses()
        {
            var courseCategories = await _repo.GetCourseCategories();
            foreach (var course in courseCategories)
            {
                if ((course.Cate_Image != null))
                {
                    course.Cate_Image = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.Cate_Image;
                }
            }
            var coursesToReturn = _mapper.Map<IEnumerable<CourseCategoryForListDto>>(courseCategories);
            return Ok(coursesToReturn);
        }
        [HttpPost("fdsfds")]
        public async Task<IActionResult> Index(ICollection<IFormFile> files)
        {
            var uploads = Path.Combine(_environment.WebRootPath, "uploads");
            foreach (var file in files)
            {
                if (file.Length > 0)
                {
                    using (var fileStream = new FileStream(Path.Combine(uploads, file.FileName), FileMode.Create))
                    {
                        await file.CopyToAsync(fileStream);
                    }
                }
            }
            return StatusCode(201);
        }
        [HttpPost]
        public async Task<IActionResult> AddCourseMoreImage([FromForm]CourseCategoryForAddDto dto)
        {
            dto.CreatedDate = DateTime.Now;
            dto.CreatedBy = User.Identity.Name.ToString();

            var multipleFiles = dto.MultipleFiles;
            // var files = Request.Form.Files;
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);


            var courseToCreate = _mapper.Map<CourseCategory>(dto);
            _repo.Add(courseToCreate);
            await _repo.SaveAll();
            int idOfCoursAdded = _repo.GetCourseMaxID();

            if (multipleFiles.Any(f => f.Length == 0))
            {
                return BadRequest();
            }

            foreach (var file in multipleFiles)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(folderName, fileName); //you can add this path to a list and then return all dbPaths to the client if require

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                    dto.Cate_Image = fileName;
                    courseToCreate.Cate_Image = dto.Cate_Image;
                    var courseFromRepo1 = await _repo.GetCourseCategory(idOfCoursAdded);
                    _mapper.Map(courseToCreate, courseFromRepo1);
                }
                await _repo.SaveAll();
            }

            // if ((multipleFiles != null))
            // {
            //     foreach (var fileUpload in multipleFiles)
            //     {
            //         string multipleFile = idOfCoursAdded + "_" + ContentDispositionHeaderValue.Parse(fileUpload.ContentDisposition).FileName.Trim('"');
            //         string dbPath = Path.Combine(_environment.ContentRootPath, "Upload", multipleFile);
            //         using (var streamMultiple = new FileStream(dbPath, FileMode.Create))
            //         {
            //             fileUpload.CopyTo(streamMultiple);
            //             dto.Cate_Image = multipleFile;
            //             courseToCreate.Cate_Image = dto.Cate_Image;
            //             var courseFromRepo1 = await _repo.GetCourseCategory(idOfCoursAdded);
            //             _mapper.Map(courseToCreate, courseFromRepo1);
            //             await _repo.SaveAll();
            //         }

            //     }
            // }
            return StatusCode(201);
        }
        // [HttpGet]
        //   public async Task<IActionResult> GetCourseCategory()
        // {
        //      var courseCategories = await _repo.GetCourseCategories();

        //     var courseCategoriesToReturn = _mapper.Map<IEnumerable<CourseCategoryForListDto>>(courseCategories);

        //     return Ok(courseCategoriesToReturn);
        // }

        // [HttpGet("{id}", Name = "GetCourseCategory")]
        // public async Task<IActionResult> GetCourseCategory(int id)
        // {
        //     var courseCategories = await _repo.GetCourseCategory(id);

        //     var courseCategoriesToReturn = _mapper.Map<CourseCategoryForDetailedDto>(courseCategories);

        //     return Ok(courseCategoriesToReturn);
        // }
        // [HttpPost]
        // public async Task<IActionResult> AddCourseCategory(CourseCategoryForAddDto courseCategoryForAddDto)
        // {
        //     // courseCategoryForAddDto.Name = courseCategoryForAddDto.Name.ToLower();
        //     courseCategoryForAddDto.CreatedDate = DateTime.Now;
        //     // courseCategoryForAddDto.CreatedBy = User.Identity.Name.ToString();
        //     courseCategoryForAddDto.UpdatedDate = DateTime.Now;
        //     // courseCategoryForAddDto.UpdatedBy = User.Identity.Name.ToString();

        //     // if (await _repo.UserExists(courseCategoryForAddDto.Name))
        //     //     return BadRequest("Tài khoản đã tồn tại");

        //     var courseCategoryToCreate = _mapper.Map<CourseCategory>(courseCategoryForAddDto);
        //     _repo.Add(courseCategoryToCreate);
        //     await _repo.SaveAll();

        //     return StatusCode(201);
        // }
        // [HttpPut("{id}")]
        // public async Task<IActionResult> UpdateCourseCate(int id, CourseCategoryForUpdateDto courseCategoryForUpdateDto)
        // {

        //     var courseCateFromRepo = await _repo.GetCourseCategory(id);

        //     courseCategoryForUpdateDto.UpdatedDate = DateTime.Now;
        //     // courseCategoryForUpdateDto.UpdatedBy = User.Identity.Name.ToString();
        //     _mapper.Map(courseCategoryForUpdateDto, courseCateFromRepo);

        //     if (await _repo.SaveAll())
        //         return NoContent();

        //     throw new Exception($"Updating coursecate {id} failed on save");
        // }

        //  [HttpDelete("{id}")]
        //  public async Task<ActionResult> DeleteCourseCategory(int id)
        // {
        //     var courseCategory = await _repo.GetCourseCategory(id);
        //     if (courseCategory == null)
        //     {
        //         return NotFound();
        //     }

        //     _repo.Delete(courseCategory);
        //     await _repo.SaveAll();

        //     return Ok();
        // }

    }
}