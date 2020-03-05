using System.Threading.Tasks;
using Academy.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController: ControllerBase
    {
        private readonly AcademyDbContext _context;

        public AdminController(AcademyDbContext context)
        {
            _context = context;
        }
        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("usersWithRoles")]
        public async Task<IActionResult> GetUsersWithRoles() 
        {
             var userList = await (from user in _context.Users
                                    orderby user.UserName
                                  select new
                                  {
                                      Id = user.Id,
                                      UserName = user.UserName,
                                      Roles = (from userRole in user.UserRoles
                                               join role in _context.Roles
                                               on userRole.RoleId
                                               equals role.Id
                                               select role.Name).ToList()
                                  }).ToListAsync();
            return Ok(userList);
        }
        //
        [Authorize(Policy="ModeratePhotoRole")]
        [HttpGet("getphoto")]
        public IActionResult GetPhotosForModeration() 
        {
            return Ok("Admin and Moderator can see this");
        }
    }
}