using System;
using System.Collections.Generic;

namespace Academy.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int Age { get; set; }

        public string  Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        // public string KnownAs { get; set; }
        // public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string FullName { get; set; }
        // public string MyProperty { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string PhotoUrl { get; set; }
        public int Status { get; set; }
        public string UserImage { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public ICollection<string> Roles { get; set; }


    }
}