using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Academy.API.Models
{
    public class Role: IdentityRole<int>
    {
        public IEnumerable<UserRole> UserRoles {get;set;}
    }
}