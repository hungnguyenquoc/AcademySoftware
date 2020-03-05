using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("ProgramStudies")]
    public class ProgramStudy: Auditable
    {
        // [Key]
        // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Pro_Name { get; set; }
        public string Pro_Code { get; set; }
        public string Pro_Description { get; set; }

        [Required]
        public int MajorId { get; set; }

        [ForeignKey("MajorId")]
        public virtual Major Major { get; set; }

        public virtual IEnumerable<Course> Courses { get; set; }

    }
}