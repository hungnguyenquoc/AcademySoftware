using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Academy.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly IAcademyRepository _repo;
        private readonly IMapper _mapper;
        public PhotosController(IAcademyRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPhotos(int id)
        {
            var photos = await _repo.GetPhoto(id);
            var photosToReturn = _mapper.Map<IEnumerable<PhotosForDetailedDto>>(photos);
            return Ok(photosToReturn);
        }
        // [HttpGet("{id}")]
        // public async Task<IActionResult> GetUser(int id)
        // {
        //     var user = await _repo.GetUser(id);
        //     var userToReturn = _mapper.Map<UserForDetailedDto>(user);
        //     return Ok(userToReturn);
        // }
    }
}