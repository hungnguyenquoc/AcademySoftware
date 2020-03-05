using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Academy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseCategoriesController: ControllerBase
    {
        private readonly ICourseCategoryRepository _repo;
        private readonly IMapper _mapper;

        // public CourseCategoriesController(ICourseCategoryRepository repo, IMapper mapper)
        // {
        //     _repo = repo;
        //     _mapper = mapper;
        // }

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