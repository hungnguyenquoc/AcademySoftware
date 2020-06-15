using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        private readonly IRoleRepository _roleRepository;
        private readonly IPermissionRepository _permissionRepository;
        private readonly IFunctionRepository _functionRepository;

        public RolesController(
                            UserManager<User> userManager,
                            RoleManager<Role> roleManager,
                            IMapper mapper,
                            IRoleRepository roleRepository,
                            IPermissionRepository permissionRepository,
                            IFunctionRepository functionRepository
                            )
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _roleRepository = roleRepository;
            _permissionRepository = permissionRepository;
            _functionRepository = functionRepository;
            _functionRepository = functionRepository;
        }
        [HttpGet]
        public IActionResult GetAllRole() 
        {
            var roles = _roleManager.Roles.ToList();
            var classesToReturn = _mapper.Map<IEnumerable<RoleForListDto>>(roles);
            return Ok(classesToReturn);
        }
        //
        [HttpGet("{id}", Name="GetRole")]
        public async Task<IActionResult> GetClass(int id) 
        {
            var roleName = await _roleRepository.GetRole(id);
            var roleToReturn = _mapper.Map<RoleForUpdateRoleDto>(roleName);
            return Ok(roleToReturn);
        }
        //
        // [HttpGet("getAllPermission")]
        // public async Task<IActionResult> GetAllPermission(int functionId)
        // {
        //     List<PermissionForDto> permission = new List<PermissionForDto>();
        //     var roles = _roleManager.Roles.Where(x => x.Name != "admin").ToListAsync();
        //     var listPermission =await  _permissionRepository.GetByFunctionId(functionId);
        //     foreach( var item in roles)
        //     {

        //     }
        //     // if (listPermission.Count == 0)
        //     //     {
        //     //         foreach (var item in roles)
        //     //         {
        //     //             permissions.Add(new PermissionViewModel()
        //     //             {
        //     //                 RoleId = item.Id,
        //     //                 CanCreate = false,
        //     //                 CanDelete = false,
        //     //                 CanRead = false,
        //     //                 CanUpdate = false,
        //     //                 AppRole = new ApplicationRoleViewModel()
        //     //                 {
        //     //                     Id = item.Id,
        //     //                     Description = item.Description,
        //     //                     Name = item.Name
        //     //                 }
        //     //             });
        //     //         }
        //     //     }
        // }



        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> AddRole(RolesDto rolesDto)  
        {
            var role = new Role { Name = rolesDto.Name};
            var result = await _roleManager.CreateAsync(role);
            return StatusCode(201);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRole(int id, RoleForUpdateRoleDto updateRole )
        {
            var classFromRepo = await _roleRepository.GetRole(id);

            _mapper.Map(updateRole, classFromRepo);
            if( await _roleRepository.SaveAll()) {
                return NoContent();
            }
            throw new Exception($"Updating class {id} failed on save");
            // var appRole = await _roleManager.FindByNameAsync(updateRole.Name);
            // await _roleManager.UpdateAsync(appRole);
            // return StatusCode(201);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole(int id) 
        {
            var role = await _roleRepository.GetRole(id);
            if (role == null)
            {
                return NotFound();
            }

            _roleRepository.Delete(role);
            await _roleRepository.SaveAll();

            return Ok();
        } 
        // [Authorize(Policy = "RequireAdminRole")]
        // [HttpGet("usersWithRoles")]
        // public async Task<IActionResult> GetUsersWithRoles() 
        // {
        //      var userList = await (from user in _context.Users
        //                             orderby user.UserName
        //                           select new
        //                           {
        //                               Id = user.Id,
        //                               UserName = user.UserName,
        //                               Roles = (from userRole in user.UserRoles
        //                                        join role in _context.Roles
        //                                        on userRole.RoleId
        //                                        equals role.Id
        //                                        select role.Name).ToList()
        //                           }).ToListAsync();
        //     return Ok(userList);
        // }
        // [HttpGet]
        // public async Task<IActionResult> GetRoles()
        // {
        //     // var roles = await _repo.GetRoles();
        //     // var rolesToReturn = _mapper.Map<IEnumerable<RolesDto>>(roles);
        //     // return Ok(rolesToReturn);
        //     // var roles = this.AppRoleManager.Roles;
        // }
        // [HttpPost]
        // public async Task<IActionResult> AddRoles(string userName,RolesDto rolesDto)
        // {
        //     if(!ModelState.IsValid) 
        //     {
        //         return BadRequest(ModelState);
        //     }
        //     var user =await  _userManager.FindByNameAsync(userName);
        //     await _userManager.AddToRoleAsync(user, "Employee");
        //     // var role = new Role { Name = rolesDto.Name};
        //     // var result = await _roleManager.CreateAsync(role);
        //     return StatusCode(201);
        // }
        //  [Authorize(Policy = "RequireAdminRole")]
        // [HttpPost("editRoles/{userName}")]
        // public async Task<IActionResult> EditRoles(string userName, RoleEditDto roleEditDto)
        // {
        //     var user = await _userManager.FindByNameAsync(userName);

        //     var userRoles = await _userManager.GetRolesAsync(user);

        //     var selectedRoles = roleEditDto.RoleNames;

        //     selectedRoles = selectedRoles ?? new string[] { };
        //     var result = await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles));

        //     if (!result.Succeeded)
        //         return BadRequest("Failed to add to roles");

        //     result = await _userManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles));

        //     if (!result.Succeeded)
        //         return BadRequest("Failed to remove the roles");

        //     return Ok(await _userManager.GetRolesAsync(user));
        // }
    }
}