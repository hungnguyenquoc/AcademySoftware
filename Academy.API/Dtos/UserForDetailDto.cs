using System;
using System.Collections.Generic;

namespace Academy.API.Dtos
{
   public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public DateTime CreatedDate {get;set;}
        public string CreatedBy { get; set; }
        public DateTime LastActive {get;set;}
        public string City { get; set; }
        public string Country { get; set; }
        public string PhotoUrl { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool Status { get; set; }
        public string UserImage { get; set; }
        public ICollection<string> Roles { get; set; }
        
        public ICollection<PhotosForDetailedDto> Photos {get;set;}
    }
}