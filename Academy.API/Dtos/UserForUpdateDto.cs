using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace Academy.API.Dtos
{
    public class UserForUpdateDto
    {
        public string Username { get; set; }
        public string  Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Country { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int Status { get; set; }
        public string UserImage { get; set; }
        public string UpdateBy { get; set; }
        public DateTime UpdateDate { get; set; }
        public IFormFile File { get; set; }

    }
}