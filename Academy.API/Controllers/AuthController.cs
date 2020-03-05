using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Academy.API.Data;
using Academy.API.Dtos;
using Academy.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Academy.API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<Role> _roleManager;

        public AuthController(IConfiguration config, 
                            IMapper mapper, 
                            UserManager<User> userManager,
                            SignInManager<User> signInManager,
                            RoleManager<Role> roleManager)
        {
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _config = config;
        }
        // Controller Register
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {

            var userToCreate = _mapper.Map<User>(userForRegisterDto);
            var result = await _userManager.CreateAsync(userToCreate, userForRegisterDto.Password);
            var userToReturn = _mapper.Map<UserForDetailedDto>(userToCreate);
            if(result.Succeeded) {
                // result =await _userManager.AddToRoleAsync(userToCreate.Id,userForRegisterDto.RoleName);
                return CreatedAtRoute("GetUser", new {controller = "Users", id = userToCreate.Id}, userToReturn);         
            }
            return BadRequest(result.Errors);
            // if(await _repo.UserExists(userForRegisterDto.Username))
            // {
            //     return BadRequest("Username already exists");
            // }
            // var userToCreated = _mapper.Map<User>(userForRegisterDto);
            
            // var createdUser = await _repo.Register(userToCreated, userForRegisterDto.Password);
            // var userToReturn = _mapper.Map<UserForDetailedDto>(createdUser);

            // return CreatedAtRoute("GetUser", new {controller = "Users", id = createdUser.Id}, userToReturn);
        }
        // Controller Reset Password

        // Controller Login
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
             var user = await _userManager.FindByNameAsync(userForLoginDto.Username);

            var result = await _signInManager.CheckPasswordSignInAsync(user, userForLoginDto.Password, true);
                

            if (result.Succeeded)
            {
                var appUser = await _userManager.Users
                    .FirstOrDefaultAsync(u => u.NormalizedUserName == userForLoginDto.Username.ToUpper());

                var userToReturn = _mapper.Map<UserForListDto>(appUser);

                return Ok(new
                {
                    tokenString = GenerateJwtToken(appUser).Result,
                    user = userToReturn
                });
            }

            return Unauthorized();
            // var user = await _userManager.FindByNameAsync(userForLoginDto.Username);
            // var result = await _signInManager.CheckPasswordSignInAsync(user, userForLoginDto.Password, false);
            // if(result.Succeeded) {
            //     var appUser = await _userManager.Users.Include(p => p.Photos)
            //     .FirstOrDefaultAsync(u => u.NormalizedUserName == userForLoginDto.Username.ToUpper());
            
            //     var userToReturn = _mapper.Map<UserForListDto>(appUser);

            //     return Ok(new{
            //         token = GenerateJwtToken(appUser),
            //         user = userToReturn
            //     });

            // }
            // return Unauthorized();
            // var userFromRepo =await  _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

            // if (userFromRepo == null)
            //     return Unauthorized();

            // // generate token
            // var tokenHandler = new JwtSecurityTokenHandler();
            // var key = Encoding.ASCII.GetBytes(_config.GetSection("AppSettings:Token").Value);
            // var tokenDescriptor = new SecurityTokenDescriptor
            // {
            //     Subject = new ClaimsIdentity(new Claim[]
            //     {
            //         new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
            //         new Claim(ClaimTypes.Name, userFromRepo.UserName)
            //     }),
            //     Expires = DateTime.Now.AddDays(1),
            //     SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
            //     SecurityAlgorithms.HmacSha512Signature)
            // };

            // var token = tokenHandler.CreateToken(tokenDescriptor);
            // var tokenString = tokenHandler.WriteToken(token);

            // return Ok(new { tokenString });

        }
        private async Task<string> GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName)
            };
            var roles = await _userManager.GetRolesAsync(user);
            
            foreach(var role in roles) 
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}