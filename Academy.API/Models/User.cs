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
        // public string Email { get; set; }
        public string MobilePhone { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public DateTime LastActive { get; set; }
        public virtual ICollection<Photo> Photos {get;set;}
        public virtual ICollection<UserRole> UserRoles {get;set;}
        public ICollection<OpenRegister> OpenRegisters {get;set;}
        public virtual IEnumerable<Major> Majors { get; set; }
        public virtual IEnumerable<Event> Events { get; set; }

        // public virtual IEnumerable<OpenRegister> OpenRegisters { get; set; }



    }
}
