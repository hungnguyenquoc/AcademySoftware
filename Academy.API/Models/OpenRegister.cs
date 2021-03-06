using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("OpenRegisters")]
    public class OpenRegister : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(256)]
        public string ReName { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        // [Required]
        // public int UserId { get; set; }

        // [ForeignKey("UserId")]
        // public virtual User User { get; set; }

        [Required]
        public int CourseId { get; set; }
        [ForeignKey("CourseId")]
        public virtual Course Course {get;set;}
        public ICollection<OpenRegisterUser> OpenRegisterUsers { get; set; }

    //    public virtual Course Course {get;set;}
    }
}