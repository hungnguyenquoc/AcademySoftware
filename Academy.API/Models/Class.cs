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
        public string Class_Name { get; set; }
        public string Class_Code { get; set; }

         [Required]
        public int BookId { get; set; }

        [ForeignKey("BookId")]
        public virtual BookingCourse BookingCourse { get; set; }

        [Required]
        public int CourseId { get; set; }

        [ForeignKey("CourseId")]
        public virtual Course Course { get; set; }

        
    }
}