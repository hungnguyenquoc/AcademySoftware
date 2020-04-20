
using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Helpers;
using Academy.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.CompilerServices;
using System.Linq;
using System.Net.Http.Headers;

namespace Academy.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseRepository _repo;
        private readonly IMapper _mapper;
        public static IHostingEnvironment _environment;
        private readonly AcademyDbContext _db;

        public CoursesController(ICourseRepository repo,
                                IMapper mapper,
                                IHostingEnvironment environment,
                                AcademyDbContext db)
        {
            _repo = repo;
            _mapper = mapper;
            _environment = environment;
            _db = db;
        }
        // [HttpPost]
        // public async Task<string> CreateCourse([FromForm]CourseForAddDto courseForAddDto)
        // {
        //     courseForAddDto.CreatedDate = DateTime.Now;
        //     courseForAddDto.CreatedBy = User.Identity.Name.ToString();

        //     try
        //     {
        //         if (courseForAddDto.Files.Length > 0)
        //         {
        //             if (!Directory.Exists(_environment.WebRootPath + "\\Upload\\"))
        //             {
        //                 Directory.CreateDirectory(_environment.WebRootPath + "\\Upload\\");
        //             }
        //             using (FileStream fileStream = System.IO.File.Create(_environment.WebRootPath + "\\Upload\\" + courseForAddDto.Files.FileName))
        //             {
        //                 courseForAddDto.Files.CopyTo(fileStream);
        //                 fileStream.Flush();
        //                 return "\\Upload\\" + courseForAddDto.Files.FileName;
        //             }
        //         }
        //         else 
        //         {
        //             return "failed";
        //         }
        //     }
        //     catch (Exception ex) 
        //     {
        //         return ex.Message.ToString();
        //     }
        // }

        // get courses
        [HttpGet]
        public async Task<IActionResult> GetCourses()
        {
            var courses = await _repo.GetCourses();
            foreach (var course in courses)
            {
                if ((course.CouImage != null) && (course.CouMoreImages == null))
                {
                    course.CouImage = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouImage;

                }
                else if ((course.CouMoreImages != null) && (course.CouImage == null))
                {
                    course.CouMoreImages = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouMoreImages;

                }
                else if ((course.CouImage != null) && (course.CouMoreImages != null))
                {
                    course.CouImage = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouImage;
                    course.CouMoreImages = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouMoreImages;
                }
                // if ((course.CouImage != null) || (course.CouMoreImages != null))
                // {
                //     course.CouImage = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouImage;
                //     course.CouMoreImages = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouMoreImages;
                // }
            }
            var coursesToReturn = _mapper.Map<IEnumerable<CourseForListDto>>(courses);
            return Ok(coursesToReturn);
        }
        // get course
        [HttpGet("{id}", Name = "GetCourse")]
        public async Task<IActionResult> GetCourse(int id)
        {
            var course = await _repo.GetCourse(id);


                if ((course.CouImage != null) && (course.CouMoreImages == null))
                {
                    course.CouImage = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouImage;

                }
                else if ((course.CouMoreImages != null) && (course.CouImage == null))
                {
                    course.CouMoreImages = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouMoreImages;

                }
                else if ((course.CouImage != null) && (course.CouMoreImages != null))
                {
                    course.CouImage = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouImage;
                    course.CouMoreImages = BaseURL.GetBaseUrl(Request) + "/Upload/" + course.CouMoreImages;
                }
            var courseToReturn = _mapper.Map<CourseForDetailedDto>(course);


            return Ok(courseToReturn);
        }
        // get image for id
        [HttpGet("getImageData/{id}")]
        public async Task<IActionResult> GetImageData(int id)
        {
            var aUser = await _repo.GetCourse(id);
            if (aUser != null)
            {
                if (!String.IsNullOrEmpty(aUser.CouImage))
                {
                    string path = Path.Combine(_environment.ContentRootPath, "Upload", aUser.CouImage);
                    try
                    {
                        byte[] bytes = System.IO.File.ReadAllBytes(path);
                        string base64Str = Convert.ToBase64String(bytes);
                        return Ok(new FileDataInfo
                        {
                            FileName = aUser.CouImage,
                            Extension = Path.GetExtension(aUser.CouImage),
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
        // create new course
        [HttpPost]
        public async Task<IActionResult> AddCourseMoreImage([FromForm]CourseForAddDto courseForAddDto)
        {
            courseForAddDto.CreatedDate = DateTime.Now;
            courseForAddDto.CreatedBy = User.Identity.Name.ToString();

            var file = courseForAddDto.File;
            var multipleFiles = courseForAddDto.MultipleFiles;
            var courseToCreate = _mapper.Map<Course>(courseForAddDto);
            _repo.Add(courseToCreate);
            await _repo.SaveAll();
            int idOfCoursAdded = _repo.GetCourseMaxID();

            if ((file != null) && (multipleFiles == null))
            {
                string newFileName = idOfCoursAdded + "_" + file.FileName;
                string path = Path.Combine(_environment.ContentRootPath, "Upload", newFileName);
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    file.CopyTo(stream);
                    courseForAddDto.CouImage = newFileName;
                    courseToCreate.CouImage = courseForAddDto.CouImage;
                    var courseFromRepo1 = await _repo.GetCourse(idOfCoursAdded);
                    _mapper.Map(courseToCreate, courseFromRepo1);
                    await _repo.SaveAll();
                }
            }
            else if ( (multipleFiles != null) && (file == null) ) 
            {
                foreach (var fileUpload in multipleFiles)
                {
                    string multipleFile = idOfCoursAdded + "_" + ContentDispositionHeaderValue.Parse(fileUpload.ContentDisposition).FileName.Trim('"');
                    string dbPath = Path.Combine(_environment.ContentRootPath, "Upload", multipleFile);
                    using (var streamMultiple = new FileStream(dbPath, FileMode.Create))
                    {
                        fileUpload.CopyTo(streamMultiple);
                        courseForAddDto.CouMoreImages = multipleFile;
                        courseToCreate.CouMoreImages = courseForAddDto.CouMoreImages;
                        var courseFromRepo1 = await _repo.GetCourse(idOfCoursAdded);
                        _mapper.Map(courseToCreate, courseFromRepo1);
                        await _repo.SaveAll();
                    }

                }
            }
            else if ( (file != null) && (multipleFiles != null)) 
            {
                string newFileName = idOfCoursAdded + "_" + file.FileName;
                string path = Path.Combine(_environment.ContentRootPath, "Upload", newFileName);
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    file.CopyTo(stream);
                    courseForAddDto.CouImage = newFileName;
                    courseToCreate.CouImage = courseForAddDto.CouImage;
                    var courseFromRepo1 = await _repo.GetCourse(idOfCoursAdded);
                    _mapper.Map(courseToCreate, courseFromRepo1);
                    await _repo.SaveAll();
                }
                foreach (var fileUpload in multipleFiles)
                {
                    string multipleFile = idOfCoursAdded + "_" + ContentDispositionHeaderValue.Parse(fileUpload.ContentDisposition).FileName.Trim('"');
                    string dbPath = Path.Combine(_environment.ContentRootPath, "Upload", multipleFile);
                    using (var streamMultiple = new FileStream(dbPath, FileMode.Create))
                    {
                        fileUpload.CopyTo(streamMultiple);
                        courseForAddDto.CouMoreImages = multipleFile;
                        courseToCreate.CouMoreImages = courseForAddDto.CouMoreImages;
                        var courseFromRepo1 = await _repo.GetCourse(idOfCoursAdded);
                        _mapper.Map(courseToCreate, courseFromRepo1);
                        await _repo.SaveAll();
                    }

                }
            }
            return StatusCode(201);
        }
        // update course
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCourse(int id,[FromForm] CourseForUpdateDto courseForUpdateDto) 
        {
            courseForUpdateDto.UpdatedBy = User.Identity.Name.ToString();
            courseForUpdateDto.UpdatedDate = DateTime.Now;
            var courseFromRepo = await _repo.GetCourse(id);
            if( courseFromRepo == null) 
            {
                return NotFound();
            }
            var fileForImage = courseFromRepo.CouImage;
            var multipleFiles = courseFromRepo.CouMoreImages;
            string path = "";

            // Nếu thuộc tính hình có tồn tại thì set một đường link theo vị trí lưu hình 
            if (!String.IsNullOrEmpty(fileForImage))
            {
            path=Path.Combine(_environment.ContentRootPath, "Upload", fileForImage);
            }
            var file = courseForUpdateDto.File;

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
                        courseForUpdateDto.CouImage = newFileName;
                        // Map dữ liệu và lưu những thay đổi
                        _mapper.Map(courseForUpdateDto, courseFromRepo);
                        await _repo.SaveAll();
                    }
                }
                // Nếu file null
                else {
                // Map dữ liệu và lưu những thay đổi
                _mapper.Map(courseForUpdateDto, courseFromRepo);
                  await _repo.SaveAll();
                }
                
                return Ok(courseForUpdateDto);
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
                        
                        courseForUpdateDto.CouImage = newFileName;
                        _mapper.Map(courseForUpdateDto, courseFromRepo);
                        await _repo.SaveAll();
                        if (System.IO.File.Exists(path))
                            try { System.IO.File.Delete(path); } catch { }
                    }
                }
                else
                {
                    // !courseForUpdateDto.Image = null;
                    courseForUpdateDto.CouImage = courseFromRepo.CouImage;
                    _mapper.Map(courseForUpdateDto, courseFromRepo);
                    await _repo.SaveAll();

                }
                return Ok(courseForUpdateDto);
            }

            return Ok(courseForUpdateDto);
        }
    }
}


