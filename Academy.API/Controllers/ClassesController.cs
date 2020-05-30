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
    [Authorize]
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
        [HttpGet]
        public async Task<IActionResult> GetClasses()
        {
            var classes = await _repo.GetClasses();
            var classesToReturn = _mapper.Map<IEnumerable<ClassForListDto>>(classes);
            return Ok(classesToReturn);
            // var classesList = await (from cl in _db.Classes
            //                          orderby cl.Class_Code
            //                          select new 
            //                          {
            //                              Id = cl.Id,
            //                              Class_Code = cl.Class_Code,
            //                              StudyTime = (from ol in cl.OptionClasses join o in _db.Options
            //                                             on ol.Class_Id equals c.Id
            //                                             select option.studyTime).ToList()
            //                          }).ToListAsync();
            // var classesList = await (from c in _db.Classes 
            //                          join o in _db.OptionClasses
            //                          on c.Id equals o.Id
            //                          select new 
            //                          {
            //                              Id = c.Id,
            //                              Class_Code = c.Class_Code,
            //                              StudyTime = o.studyTime
            //                          }
            //                         ).ToListAsync();
            // return Ok();
            
        }
        [HttpGet("{id}", Name="GetClass")]
        public async Task<IActionResult> GetClass(int id) 
        {
            var className = await _repo.GetClass(id);
            var classToReturn = _mapper.Map<ClassForDetailedDto>(className);
            return Ok(classToReturn);
        }
        [HttpPost]
        public async Task<IActionResult> CreateClass(ClassForAddDto classForAddDto)
        {
            classForAddDto.CreatedDate = DateTime.Now;
            classForAddDto.CreatedBy = User.Identity.Name.ToString();
            // Status = 1 thể hiện cho việc đang mở đăng ký khóa học
            classForAddDto.Status = 1;
            // var selectedCheck = classForAddDto.StudyTime;
            // selectedCheck = selectedCheck ?? new string[] { };



            // var a = classForAddDto.StudyTime;
            // a = classForAddDto.studyTimeGet[]
            var classToCreate = _mapper.Map<Class>(classForAddDto);
            _repo.Add(classToCreate);
            await _repo.SaveAll();
            return Ok(201);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOpenRegister(int id, ClassForUpdateDto updateDto)
        {
            updateDto.UpdatedDate = DateTime.Now;
            updateDto.UpdatedBy = User.Identity.Name.ToString();

            var classFromRepo = await _repo.GetClass(id);

            _mapper.Map(updateDto, classFromRepo);
            if( await _repo.SaveAll()) {
                return NoContent();
            }
            throw new Exception($"Updating class {id} failed on save");
        }
    }
}