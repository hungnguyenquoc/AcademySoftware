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
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FunctionController: ControllerBase
    {
        private readonly IFunctionRepository _repo;
        private readonly IMapper _mapper;
        private readonly AcademyDbContext _db;

        public FunctionController(IFunctionRepository repo,
                                IMapper mapper,
                                AcademyDbContext db)
        {
            _repo = repo;
            _mapper = mapper;
            _db = db;
        }
        [HttpGet]
        public async Task<IActionResult> GetFunctions()
        {
            var functions = await _repo.GetFunctions();
            var functionsToReturn = _mapper.Map<IEnumerable<FunctionForListDto>>(functions);
            return Ok(functionsToReturn);
        }
        [HttpGet("{id}", Name="GetFunction")]
        public async Task<IActionResult> GetFunction(int id)
        {
            var funcion = await _repo.GetFunction(id);
            var functionToReturn = _mapper.Map<FunctionForListDto>(funcion);
            return Ok(functionToReturn);
        }
        [HttpPost]
        public async Task<IActionResult> CreateFunction(FunctionForListDto functionForListDto)
        {
            if(await _repo.FunctionExists(functionForListDto.Name))
            {
                return BadRequest( " Tên chức năng đã tồn tại");
            }
            var functionToReturn = _mapper.Map<Function>(functionForListDto);
            _repo.Add(functionToReturn);
            await _repo.SaveAll();
            return CreatedAtRoute("GetFunction", new {id = functionToReturn.ID}, functionToReturn);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFunction(int id, FunctionForUpdateDto updateDto)
        {
            var functionToUpdate = await _repo.GetFunction(id);
            _mapper.Map(functionToUpdate, updateDto);
            if(await _repo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception($"Updating coursecate {id} failed on save");
        }
    }
}