using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("Students")]
    public class Student:Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Stu_Code { get; set; }
        public string Stu_Fullname { get; set; }
        public string Stu_Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Stu_Phone { get; set; }
        public string Stu_Email { get; set; }
        public string Stu_Facebook { get; set; }
        public string Identity_Card { get; set; }
        public string Source {get;set;}

        [Required]
        public int ClassId { get; set; }

        [ForeignKey("ClassId")]
        public virtual Class Class { get; set; } 
    }
}