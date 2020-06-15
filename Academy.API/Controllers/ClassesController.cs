using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Controllers
{
    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ClassesController : ControllerBase
    {
        private readonly IClassRepository _repo;
        private readonly IMapper _mapper;
        private readonly AcademyDbContext _db;

        public ClassesController(IClassRepository repo,
                                IMapper mapper,
                                AcademyDbContext db)
        {
            _repo = repo;
            _mapper = mapper;
            _db = db;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetClasses()
        {
            var classesList = await (from cl in _db.Classes
                                     orderby cl.Class_Code
                                     select new 
                                     {
                                         Id = cl.Id,
                                         Class_Code = cl.Class_Code,
                                         Class_Description = cl.Class_Description,
                                         CourseId = cl.CourseId,
                                         Status = cl.Status,
                                         StartTime = cl.StartTime,
                                         EndTime = cl.EndTime,
                                         StudyTimeGetDay = (from ol in cl.OptionClasses join o in _db.Options
                                                        on ol.OptionId equals o.Id
                                                        select o.StudyTimeGetDay).ToList()
                                     }).ToListAsync();
            return Ok(classesList);
           
        }
        [HttpGet("getAllOptions")]
        public async Task<IActionResult> GetOptions() 
        {
            var option = await _repo.GetOptions();
            var optionToReturn = _mapper.Map<IEnumerable<OptionForListDto>>(option);
            return Ok(optionToReturn);
        }

        [HttpGet("getStudent")]
        public async Task<IActionResult> GeStudents() 
        {
            var className = await _db.Students.OrderByDescending(o => o.Id).ToListAsync();
            // var option = await _repo.GetOptions();
            var optionToReturn = _mapper.Map<IEnumerable<StudentForListDto>>(className);
            return Ok(optionToReturn);
        }

        [AllowAnonymous]
        [HttpGet("{id}", Name="GetClass")]
        public async Task<IActionResult> GetClass(int id) 
        {
            var className = await _repo.GetClass(id);
            var classToReturn = _mapper.Map<ClassForDetailedDto>(className);
            return Ok(classToReturn);
            // var className = await (from cl in _db.Classes
            //                        orderby cl.Class_Code
            //                        select new {
            //                             Id = cl.Id, 
            //                             Class_Code = cl.Class_Code,
            //                             Class_Description = cl.Class_Description,
            //                             StartTime = cl.StartTime,
            //                             EndTime = cl.EndTime,
            //                             Class_Address = cl.Class_Address,
            //                             CourseId = cl.CourseId,
            //                             Status = cl.Status,
            //                             CreatedDate = cl.CreatedDate,
            //                             CreatedBy = cl.CreatedBy,
            //                             StudyTimeGetDay = (from ol in cl.OptionClasses join o in _db.Options
            //                                                  on ol.OptionId equals o.Id
            //                                                  select o.StudyTimeGetDay
            //                                                  ).ToList()
            //                        }
            //                       ).FirstOrDefaultAsync( o => o.Id == id);
            // return Ok(className);
        }
        //  [HttpPost]
        // public async Task<IActionResult> CreateClass(ClassForAddDto addDto)
        // {
        //     addDto.CreatedDate = DateTime.Now;
        //     addDto.CreatedBy = User.Identity.Name.ToString();
        //     addDto.Status = 1;
        //     var studyTime = addDto.StudyTimeGetDay.ToArray();
        //     var classToCreate = _mapper.Map<Class>(addDto);
        //     _repo.Add(classToCreate);
        //     await _repo.SaveAll();
        //     return CreatedAtRoute("GetClass", new {id = classToCreate.Id}, classToCreate);
        // }
   
        [ProducesResponseType(201, Type = typeof(Class))]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(422)]
        [ProducesResponseType(500)]
        public IActionResult CreateBook([FromQuery] List<int> optionId,
                                        [FromBody] Class classToCreate)
        {
            // var statusCode = ValidateBook(authId, catId, bookToCreate);

            if (!_repo.CreateBook(optionId , classToCreate))
            {
                ModelState.AddModelError("", $"Something went wrong saving the book " +
                                            $"{classToCreate.Class_Code}");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("GetClass", new { id = classToCreate.Id }, classToCreate);
        }
        [HttpPost("addClass")]
        public async Task<IActionResult> CreateClass(ClassForAddDto classForAddDto)
        {
            classForAddDto.CreatedDate = DateTime.Now;
            classForAddDto.CreatedBy = User.Identity.Name.ToString();
            // Status = 1 thể hiện cho việc đang mở đăng ký khóa học
            classForAddDto.Status = 1;
            var classToCreate = _mapper.Map<Class>(classForAddDto);
            _repo.Add(classToCreate);
            await _repo.SaveAll();
            return Ok(201);
        }
    //     [HttpPut("{id}")]
    //     public async Task<IActionResult> UpdateClass(int id, ClassForUpdateDto updateDto)
    //     {
    //         var className = await (from cl in _db.Classes
    //                                orderby cl.Class_Code
    //                                select new {
    //                                     Id = cl.Id, 
    //                                     Class_Code = cl.Class_Code,
    //                                     Class_Description = cl.Class_Description,
    //                                     StartTime = cl.StartTime,
    //                                     EndTime = cl.EndTime,
    //                                     Class_Address = cl.Class_Address,
    //                                     CourseId = cl.CourseId,
    //                                     Status = cl.Status,
    //                                     CreatedDate = cl.CreatedDate,
    //                                     CreatedBy = cl.CreatedBy,
    //                                     StudyTimeGetDay = (from ol in cl.OptionClasses join o in _db.Options
    //                                                          on ol.OptionId equals o.Id
    //                                                          select o.StudyTimeGetDay
    //                                                          ).ToList()
    //                                }
    //                               ).FirstOrDefaultAsync( o => o.Id == id);
    //         if( await _repo.SaveAll()) {
    //             return NoContent();
    //         }
    //         throw new Exception($"Updating class {id} failed on save");
    //     }
    //  }
// }
        }
    }