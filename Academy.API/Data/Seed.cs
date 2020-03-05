using System.Collections.Generic;
using System.Linq;
using Academy.API.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace Academy.API.Data
{
    public class Seed
    {
        private readonly UserManager<User> _userManager;

        public Seed(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public void SeedUsers()
        {
            if (!_userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);
                foreach (var user in users)
                {
                    _userManager.CreateAsync(user,"password").Wait();
                }
            }

        }
        // private readonly UserManager<User> _userManager;
        // private readonly RoleManager<Role> _roleManager;

        // public Seed(UserManager<User> userManager, RoleManager<Role> roleManager)
        // {
        //     _userManager = userManager;
        //     _roleManager = roleManager;
        // }
        // public void SeedUsers()
        // {
        //     if (!_userManager.Users.Any())
        //     {
        //         var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
        //         var users = JsonConvert.DeserializeObject<List<User>>(userData);

        //         var roles = new List<Role> 
        //         {
        //             new Role{Name="Member"},
        //             new Role{Name="Admin"},
        //             new Role{Name="Moderator"},
        //             new Role{Name="VIP"}
        //         };
        //         foreach(var role in roles) 
        //         {
        //             _roleManager.CreateAsync(role).Wait();
        //         }

        //         foreach (var user in users)
        //         {
        //             _userManager.CreateAsync(user, "password").Wait();
        //             _userManager.CreateAsync(user, "Member").Wait();
        //         }
        //         var adminUser = new User 
        //         {
        //             UserName = "Admin"
        //         };
        //         // IdentityUser result = _userManager.CreateAsync(adminUser, "password").Result
        //         IdentityResult result = _userManager.CreateAsync(adminUser, "password").Result;
        //         if(result.Succeeded) 
        //         {
        //             var admin = _userManager.FindByNameAsync("Admin").Result;
        //             _userManager.AddToRolesAsync(admin, new[] {"Admin", "Moderator"}).Wait();

        //         }
        //     }
        // }
        // private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        // {
        //     using (var hmac = new System.Security.Cryptography.HMACSHA512())
        //     {
        //         passwordSalt = hmac.Key;
        //         passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        //     }
        // }

    }
}