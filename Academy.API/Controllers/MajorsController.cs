using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MajorsController: ControllerBase
    {
        private readonly IMajorRepository _repo;
        private readonly IMapper _mapper;

        public MajorsController(IMajorRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
            // this.Repo = repo;
        }
        // phương thức get
        [HttpGet]
        public async Task<IActionResult> GetMajors()
        {
            var majors = await _repo.GetMajors();
            var majorsToReturn = _mapper.Map<IEnumerable<MajorDto>>(majors);
            return Ok(majorsToReturn);
        }
        // phương thức get theo id
        [HttpGet("{id}", Name="GetMajor")]
        public async Task<IActionResult> GetMajor(int id)
        {
            
            var major = await _repo.GetMajor(id);
            var majorToReturn = _mapper.Map<MajorDto>(major);
            return Ok(majorToReturn);
        }
        // 
        [HttpPost]
        public async Task<IActionResult> CreateMajor(MajorDto majorForDto) 
        {
            majorForDto.CreatedDate = DateTime.Now;
            // majorForDto.CreatedBy = User.Identity.Name.ToString();

            majorForDto.UpdatedDate = DateTime.Now;
            // majorForDto.UpdatedBy = User.Identity.Name.ToString();

            var majorToCreate = _mapper.Map<Major>(majorForDto);
            _repo.Add(majorToCreate);
            await _repo.SaveAll();

            return StatusCode(201);
        }
        // [HttpPost("id")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMajor(int id, MajorForUpdateDto majorDto)
        {

            var majorToUpdate = await _repo.GetMajor(id);

            //majorDto.UpdatedDate = DateTime.Now;
            _mapper.Map(majorDto, majorToUpdate);
            if( await _repo.SaveAll()) {
                return NoContent();
            }
            throw new Exception($"Updating coursecate {id} failed on save");
        }
        

    }
}