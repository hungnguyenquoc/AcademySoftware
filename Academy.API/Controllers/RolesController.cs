using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Academy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly AcademyDbContext _context;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly IMapper _mapper;
        private readonly IRoleRepository _repo;

        public RolesController(
                            UserManager<User> userManager
                            , RoleManager<Role> roleManager,
                            IMapper mapper,
                            IRoleRepository repo)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetRoles()
        {
            var roles = await _repo.GetRoles();
            var rolesToReturn = _mapper.Map<IEnumerable<RolesDto>>(roles);
            return Ok(rolesToReturn);

        }
        [HttpPost]
        public async Task<IActionResult> AddRoles(string userName,RolesDto rolesDto)
        {
            // var name = rolesDto.Name;
            // rolesDto.NormalizedName = name.ToUpper();
            // var roleToCreate = _mapper.Map<Role>(rolesDto);
            // _repo.Add(roleToCreate);
            // await _repo.SaveAll();

            // return StatusCode(201);
            if(!ModelState.IsValid) 
            {
                return BadRequest(ModelState);
            }
            
            var role = new Role { Name = rolesDto.Name};
            var result = await _roleManager.CreateAsync(role);
            return StatusCode(201);
        }
        
    }
}