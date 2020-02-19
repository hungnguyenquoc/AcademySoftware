using System;
using System.ComponentModel.DataAnnotations;

namespace Academy.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
    
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage="You must specify password between 4 and 8")]
        public string Password { get; set; }

        public string  Gender { get; set; }

        public DateTime DateOfBirth { get; set; }

        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public string Country { get; set; }

        public string LastName { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }
        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
}
}