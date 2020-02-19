using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
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

        public CourseCategoriesController(ICourseCategoryRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
          public async Task<IActionResult> GetCourseCategory()
        {
             var courseCategories = await _repo.GetCourseCategories();

            var courseCategoriesToReturn = _mapper.Map<IEnumerable<CourseCategoryForListDto>>(courseCategories);

            return Ok(courseCategoriesToReturn);
        }

        [HttpGet("{id}", Name = "GetCourseCategory")]
        public async Task<IActionResult> GetCourseCategory(int id)
        {
            var courseCategories = await _repo.GetCourseCategory(id);

            var courseCategoriesToReturn = _mapper.Map<CourseCategoryForDetailedDto>(courseCategories);

            return Ok(courseCategoriesToReturn);
        }
    }
}