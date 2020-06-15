using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Helpers;
using Academy.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController: ControllerBase
    {
        private readonly IStudentRepository _repo;
        private readonly IMapper _mapper;
        public static IHostingEnvironment _environment;
        private readonly AcademyDbContext _db;
        public StudentsController(IStudentRepository repo,
                                IMapper mapper,
                                IHostingEnvironment environment,
                                AcademyDbContext db)
        {
            _repo = repo;
            _mapper = mapper;
            _environment = environment;
            _db = db;
        }
        //
        [HttpGet("getStudents")]
        public async Task<IActionResult> GetStudents()
        {
            var students = await _repo.GetStudents();
            foreach (var student in students)
            {
                if ((student.Identity_Card != null))
                {
                    student.Identity_Card = BaseURL.GetBaseUrl(Request) + "/Upload/" + student.Identity_Card;

                }
            }
            var studentsToReturn = _mapper.Map<IEnumerable<StudentForListDto>>(students);
            return Ok(studentsToReturn);
        }
        //
         [HttpGet("studentOfficial")]
        public async Task<IActionResult> GetStudentsOfficial()
        {
            var students = await _repo.GetStudentsOfficial();
            foreach (var student in students)
            {
                if ((student.Identity_Card != null))
                {
                    student.Identity_Card = BaseURL.GetBaseUrl(Request) + "/Upload/" + student.Identity_Card;

                }
            }
            // var coursesToReturn = _mapper.Map<IEnumerable<CourseForListDto>>(courses);

            var studentsToReturn = _mapper.Map<IEnumerable<StudentForListDto>>(students);
            return Ok(studentsToReturn);
        }
        // Get: api/students/pageNumber/pageSize
        [HttpGet("getStudentPagination/{pageIndex:int}/{pageSize:int}")]
        public IActionResult GetForPagination(int pageIndex, int pageSize)
        {
            var data = _db.Students.Include(s => s.Class).OrderByDescending(s => s.CreatedDate);
            var page = new PaginationResponse<Student>(data, pageIndex, pageSize);
            var totalCount = data.Count();
            var totalPages = Math.Ceiling((double)totalCount/pageSize);
            var response = new 
            {
                Page = page,
                TotalPages = totalPages
            };
            return Ok(response);
        }
        //
        [HttpGet("getStudentWithClassAndCourse")]
        public async Task<IActionResult> GetStudentsWithCourse()
        {
            var studentList = await (from stu in _db.Students
                                     join cl in _db.Classes on stu.ClassId equals cl.Id
                                     join cou in _db.Courses on cl.CourseId equals cou.Id
                                     select new 
                                     {
                                         cl.Class_Code,
                                         cou.CouName,
                                         stu.Stu_Fullname,
                                         stu.Stu_Code
                                     }).ToListAsync();
           return Ok(studentList);
        }
        // Đếm số lượng tổng sinh viên
        [HttpGet("countAllStudent")]
        public async Task<IActionResult> CountAllStudent()
        {
            // var numberStudent = await (from stu in _db.Students.Count()).ToListAsync();
            // return Ok(numberStudent);
            // var numberStudent = from stu in _db.Students.Count();     
            var numberStudent = await (from stu in _db.Students select stu.Stu_Fullname).CountAsync();   
            return Ok(numberStudent);                     
        }
        //
        [HttpGet("countStudentOfficial")]
        public async Task<IActionResult> CountStudentOfficial()
        {
            // var numberStudent = await (from stu in _db.Students.Count()).ToListAsync();
            // return Ok(numberStudent);
            // var numberStudent = from stu in _db.Students.Count();     
            var numberStudent = await (from stu in _db.Students 
                                       select new 
                                       {
                                           stu.Stu_Fullname,
                                           stu.Status
                                       }).Where(s => s.Status != 1).CountAsync();
            return Ok(numberStudent);                     
        }
        //
        [HttpGet("countStudentPotential")]
        public async Task<IActionResult> CountStudentPotential()
        {
            // var numberStudent = await (from stu in _db.Students.Count()).ToListAsync();
            // return Ok(numberStudent);
            // var numberStudent = from stu in _db.Students.Count();     
            var numberStudent = await (from stu in _db.Students 
                                       select new 
                                       {
                                           stu.Stu_Fullname,
                                           stu.Status
                                       }).Where(s => s.Status == 1).CountAsync();
            return Ok(numberStudent);                     
        }
        //
        [HttpGet("{id}", Name = "GetStudent")]
        public async Task<IActionResult> GetStudent(int id)
        {
            var student = await _repo.GetStudent(id);
                if ((student.Identity_Card != null))
                {
                    student.Identity_Card = BaseURL.GetBaseUrl(Request) + "/Upload/" + student.Identity_Card;

                }
            var studentToReturn = _mapper.Map<StudentForDetailedDto>(student);
            return Ok(studentToReturn);
        }
         // get image for id
        [HttpGet("getImageData/{id}")]
        public async Task<IActionResult> GetImageData(int id)
        {
            var aUser = await _repo.GetStudent(id);
            if (aUser != null)
            {
                if (!String.IsNullOrEmpty(aUser.Identity_Card))
                {
                    string path = Path.Combine(_environment.ContentRootPath, "Upload", aUser.Identity_Card);
                    try
                    {
                        byte[] bytes = System.IO.File.ReadAllBytes(path);
                        string base64Str = Convert.ToBase64String(bytes);
                        return Ok(new FileDataInfo
                        {
                            FileName = aUser.Identity_Card,
                            Extension = Path.GetExtension(aUser.Identity_Card),
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
        [HttpPost("addNew")]
        public async Task<IActionResult> Add(StudentForAddDto addDto)
        {
            var majorToCreate = _mapper.Map<Student>(addDto);
            _repo.Add(majorToCreate);
            await _repo.SaveAll();

            return StatusCode(201);
        }


        [HttpPost]
        public async Task<IActionResult> AddStudent([FromForm]StudentForAddDto addDto)
        {
            addDto.CreatedDate = DateTime.Now;
            addDto.CreatedBy = User.Identity.Name.ToString();

            var file = addDto.File;
            var studentToCreate = _mapper.Map<Student>(addDto);
            _repo.Add(studentToCreate);
            await _repo.SaveAll();
            int idOfCoursAdded = _repo.GetStudentMaxID();

                
            if (file != null)
            {
                string newFileName = idOfCoursAdded + "_" + file.FileName;
                string path = Path.Combine(_environment.ContentRootPath, "Upload", newFileName);
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    file.CopyTo(stream);
                    addDto.Identity_Card = newFileName;
                    studentToCreate.Identity_Card = addDto.Identity_Card;
                    //_data.Entry(courseForAddDto).Property(x => x.Image).IsModified = true;
                    var studentFromRepo1 = await _repo.GetStudent(idOfCoursAdded);
                    _mapper.Map(studentToCreate, studentFromRepo1);
                    await _repo.SaveAll();
                }
            }
            return StatusCode(201);
        }

         [HttpPut("{id}")]
        public async Task<ActionResult> UpdateStudent(int id, [FromForm] StudentForUpdateDto updateDto)
        {
            // Set dữ liệu mặc định
            updateDto.UpdatedDate = DateTime.Now;
            updateDto.UpdatedBy = User.Identity.Name.ToString();
            
            // Lấy đối tượng trước khi được cập nhật
            var studentFormRepo = await _repo.GetStudent(id);
         
            // Kiểm tra đối tượng có tồn tại hay không
            if (studentFormRepo == null)
            {
                return NotFound();
            }

            // Gán tên thuộc tính hình của đối tượng trước khi cập nhật
            var file2 = studentFormRepo.Identity_Card;
            
            string path = "";

            // Nếu thuộc tính hình có tồn tại thì set một đường link theo vị trí lưu hình 
            if (!String.IsNullOrEmpty(file2))
            path=Path.Combine(_environment.ContentRootPath, "Upload", file2);

            // Lấy tập tin mới được thêm vào
            var file = updateDto.File;

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
                        updateDto.Identity_Card = newFileName;
                        // Map dữ liệu và lưu những thay đổi
                        _mapper.Map(updateDto, studentFormRepo);
                        await _repo.SaveAll();
                    }
                }
                // Nếu file null
                else {
                // Map dữ liệu và lưu những thay đổi
                _mapper.Map(updateDto, studentFormRepo);
                  await _repo.SaveAll();
                }
                
                return Ok(updateDto);
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
                        
                        updateDto.Identity_Card = newFileName;
                        _mapper.Map(updateDto, studentFormRepo);
                        await _repo.SaveAll();
                        if (System.IO.File.Exists(path))
                            try { System.IO.File.Delete(path); } catch { }
                    }
                }
                else
                {
                    // !courseForUpdateDto.Image = null;
                    updateDto.Identity_Card = studentFormRepo.Identity_Card;
                    _mapper.Map(updateDto, studentFormRepo);
                    await _repo.SaveAll();

                }
                return Ok(updateDto);
            }

            return Ok(updateDto);
        }

    }
}