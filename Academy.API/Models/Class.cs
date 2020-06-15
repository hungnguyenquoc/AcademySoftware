using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("Classes")]
    public class Class: Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Class_Code { get; set; }
        public string Class_Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Class_Address { get; set; }
        public string StudyTime { get; set; }
        //  [Required]
        // public int BookId { get; set; }

        // [ForeignKey("BookId")]
        // public virtual BookingCourse BookingCourse { get; set; }

        [Required]
        public int CourseId { get; set; }

        [ForeignKey("CourseId")]
        public virtual Course Course { get; set; }       
        public virtual IEnumerable<BookingCourse> BookingCourse { get; set; }
        public ICollection<OptionClass> OptionClasses { get; set; }
        public virtual IEnumerable<Student> Students { get; set; }

    }
}