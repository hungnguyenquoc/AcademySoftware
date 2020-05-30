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
using System.Web;
using Microsoft.Extensions.Options;
using System.Linq;

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
        private readonly IOptions<EmailOptionsDto> _emailOptions;
        private readonly IEmail _email;

        public AuthController(IConfiguration config, 
                            IMapper mapper, 
                            UserManager<User> userManager,
                            SignInManager<User> signInManager,
                            RoleManager<Role> roleManager,
                            IOptions<EmailOptionsDto> emailOptions,
                            IEmail email)
        {
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _emailOptions = emailOptions;
            _email = email;
            _emailOptions = emailOptions;
            _config = config;
        }
        // Controller Register
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {

            var userToCreate = _mapper.Map<User>(userForRegisterDto);
            // var roles = userForRegisterDto.Roles.ToArray();

            var result = await _userManager.CreateAsync(userToCreate, userForRegisterDto.Password);
            var userToReturn = _mapper.Map<UserForDetailedDto>(userToCreate);
            // await _userManager.AddToRolesAsync(userToCreate, roles);

             //Send Email
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(userToCreate);
            var confirmEmailUrl = Request.Headers["confirmEmailUrl"];//http://localhost:4200/email-confirm

            var uriBuilder = new UriBuilder(confirmEmailUrl);
            var query = HttpUtility.ParseQueryString(uriBuilder.Query);
            query["token"] = token;
            
            query["userid"] = userToCreate.Id.ToString();
            uriBuilder.Query = query.ToString();
            var urlString = uriBuilder.ToString();

            var emailBody = $"Please confirm your email by clicking on the link below </br>{urlString}";
            await _email.Send(userForRegisterDto.Email, emailBody, _emailOptions.Value);

            //
            if(result.Succeeded) {
                // result =await _userManager.AddToRoleAsync(userToCreate.Id,userForRegisterDto.RoleName);
                return CreatedAtRoute("GetUser", new {controller = "Users", id = userToCreate.Id}, userToReturn);    
                // return CreatedAtRoute(nameof(UsersController.GetUser),  new { id = userToCreate.Id }, userToCreate);
     
            }
            return BadRequest(result.Errors);
                
        }
        // Controller ConfirmEmail
        [HttpPost("confirmemail")]
        public async Task<IActionResult> ConfirmEmail(UserForConfirmEmailDto userForConfirmEmailDto)
        {
            var user = await _userManager.FindByIdAsync(userForConfirmEmailDto.UserId);
            var confirm = await _userManager.ConfirmEmailAsync(user, Uri.UnescapeDataString(userForConfirmEmailDto.Token));
            if(confirm.Succeeded) 
            {
                return Ok();
            }
            return Unauthorized();
        }

        // Controller Reset Password
        [HttpPost("resetpassword")]
        public async Task<IActionResult> ResetPassword(UserForResetPasswordDto userForReset)
        {
            var user = await _userManager.FindByEmailAsync(userForReset.Email);
            
            if(user != null || user.EmailConfirmed)
            {
                // Send Email
                var token = await _userManager.GeneratePasswordResetTokenAsync(user);
                var changePasswordUrl = Request.Headers["changePasswordUrl"]; //http://localhost:4200/changepasswordUrl
                var uriBuilder = new UriBuilder(changePasswordUrl);
                var query = HttpUtility.ParseQueryString(uriBuilder.Query);
                query["token"] = token;
                query["userid"] = user.Id.ToString();
                uriBuilder.Query = query.ToString();
                var urlString = uriBuilder.ToString();

                var emailBody = $"Click on link to change password </br> {urlString}";
                await _email.Send(userForReset.Email, emailBody, _emailOptions.Value);

                return Ok();
            }
            return Unauthorized();
        }
        // Controller Change Password
        [HttpPost("changepassword")]
        public async Task<IActionResult> ChangePassword(UserForChangePasswordDto userForChange)
        {
            var user = await _userManager.FindByIdAsync(userForChange.UserId);
            var resetPasswordResult = await _userManager.ResetPasswordAsync(user, Uri.UnescapeDataString(userForChange.Token), userForChange.Password);

            if(resetPasswordResult.Succeeded)
            {
                return Ok();
            }
            return Unauthorized();
        }
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