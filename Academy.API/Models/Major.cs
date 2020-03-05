using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("Majors")]
    public class Major: Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Maj_Name { get; set; }
        public string Maj_Code { get; set; }
        public string Maj_Description { get; set; }

        [Required]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        public virtual IEnumerable<ProgramStudy> ProgramStudies { get; set; }

    }
}