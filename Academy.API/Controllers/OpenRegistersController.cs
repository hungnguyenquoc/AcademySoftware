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
    public class OpenRegistersController: ControllerBase
    {
        private readonly IOpenRegisterRepository _repo;
        private readonly IMapper _mapper;
        private readonly AcademyDbContext _db;

        public OpenRegistersController(IOpenRegisterRepository repo, IMapper mapper, AcademyDbContext db)
        {
            _repo = repo;
            _mapper = mapper;
            _db = db;
        }
        [HttpGet]
        public async Task<IActionResult> GetOpenRegisters()
        {
            var openRegisters = await _repo.GetOpenRegisters();
            var openToReturn = _mapper.Map<IEnumerable<OpenRegisterForListDto>>(openRegisters);

            // var openToReturn = _mapper.Map<OpenRegisterForListDto>(openRegisters);
            return Ok(openToReturn);
        }
        [HttpGet("{id}", Name="GetOpenRegister")]
        public async Task<IActionResult> GetOpenRegister(int id) 
        {
            var openRegister = await _repo.GetOpenRegister(id);
            var openToReturn = _mapper.Map<OpenRegisterForDetailedDto>(openRegister);
            return Ok(openToReturn);
        }
        [HttpPost]
        public async Task<IActionResult> CreateOpenRegister(OpenRegisterForAddDto openRegisterDto)
        {
            openRegisterDto.CreatedDate = DateTime.Now;
            openRegisterDto.CreatedBy = User.Identity.Name.ToString();
            // Status = 1 thể hiện cho việc đang mở đăng ký khóa học
            openRegisterDto.Status = 1;
            var openRegisterToCreate = _mapper.Map<OpenRegister>(openRegisterDto);
            _repo.Add(openRegisterToCreate);
            await _repo.SaveAll();
            return Ok(201);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOpenRegister(int id, OpenRegisterForUpdateDto updateDto)
        {
            updateDto.UpdatedDate = DateTime.Now;
            updateDto.UpdatedBy = User.Identity.Name.ToString();

            var openFromRepo = await _repo.GetOpenRegister(id);

            _mapper.Map(updateDto, openFromRepo);
            if( await _repo.SaveAll()) {
                return NoContent();
            }
            throw new Exception($"Updating openRegister {id} failed on save");
        }
    }
}