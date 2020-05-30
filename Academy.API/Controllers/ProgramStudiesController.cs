using System;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;

namespace Academy.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProgramStudiesController: ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IProgramStudyRepository _repo;

        public ProgramStudiesController(IMapper mapper, IProgramStudyRepository repo)
        {
            _mapper = mapper;
            _repo = repo;
        }
        // controller/api/getAll
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetProgramStudies()
        {
            var programStudies = await _repo.GetProgramStudies();
            var programStudiesToReturn = _mapper.Map<IEnumerable<ProgramStudyDto>>(programStudies);
            return Ok(programStudiesToReturn);
        }
        //controller/api/getProgramStudy/id
        [AllowAnonymous]
        [HttpGet("{id}", Name="GetProgramStudy")]
        public async Task<IActionResult> GetProgramStudy(int id) 
        {
            var programStudy = await _repo.GetProgramStudy(id);
            var programStudyToReturn = _mapper.Map<ProgramStudyDto>(programStudy);
            return Ok(programStudyToReturn);
        }
        [HttpPost]
        public async Task<IActionResult> CreateProgramStudy(ProgramStudyDto programStudyDto) 
        {
            programStudyDto.CreatedDate = DateTime.Now;
            programStudyDto.CreatedBy = User.Identity.Name.ToString();
            if(await _repo.ProgramStudyExists(programStudyDto.Pro_Name)) 
            {
                return BadRequest("Ngành học đã tồn tại");
            }
            var programStudyToReturn = _mapper.Map<ProgramStudy>(programStudyDto);
            _repo.Add(programStudyToReturn);
            await _repo.SaveAll();

            return CreatedAtRoute("GetProgramStudy", new {id = programStudyToReturn.Id}, programStudyToReturn);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProgramStudy(int id,ProgramStudyForUpdateDto programUpdateDto)
        {
            var programToUpdate = await _repo.GetProgramStudy(id);
            _mapper.Map(programUpdateDto, programToUpdate);
            if(await _repo.SaveAll()) {
                return NoContent();
            }
            throw new Exception($"Updating coursecate {id} failed on save");

        }
      
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgram(int id) {
            var programToDelete = await _repo.GetProgramStudy(id);
            if(programToDelete == null) {
                return NotFound();
            }
            _repo.Delete(programToDelete);
            await _repo.SaveAll();

            return Ok();
        }
    }
}