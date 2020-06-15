using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Academy.API.Models
{
    [Table("Users")]
    public class User: IdentityUser<int>
    {   
        // [Key]
        // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // public int Id { get; set; }
        // public string Username { get; set; }
        // public byte[] PasswordHash { get; set; }
        // public byte[] PasswordSalt { get; set; }
        public string FullName { get; set; }
        public string  Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string MailAddress { get; set; }
        public string MobilePhone { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }        
        public DateTime LastActive { get; set; }
        public string UserImage { get; set; }
        public virtual ICollection<Photo> Photos {get;set;}
        public virtual ICollection<UserRole> UserRoles {get;set;}
        // public virtual ICollection<AnnouncementUser> AnnouncementUsers {get;set;}
        public ICollection<OpenRegisterUser> OpenRegisterUsers { get; set; }
        public virtual IEnumerable<Event> Events { get; set; }
    }
}
