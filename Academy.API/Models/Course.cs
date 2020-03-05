using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
     [Table("Courses")]
    public class Course : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(256)]
        public string CouName { get; set; }

        [MaxLength(256)]
        public string CouCode { get; set; }

        [MaxLength(256)]
        public string CouDescription { get; set; }

        public string CouContent { get; set; }

        [MaxLength(256)]
        public string CouImage { get; set; }

        [Column(TypeName ="xml")]
        public string CouMoreImages { get; set; }

        public decimal CouPrice { get; set; }

        public decimal CouPromotionPrice { get; set; }

        public int? CouViewCount { get; set; }

        [Required]
        public int ProId { get; set; }

        [ForeignKey("ProId")]
        public virtual ProgramStudy ProgramStudy { get; set; }

        // [Required]
        // public int ReId { get; set; }
        // [ForeignKey("ReId")]
        // public virtual OpenRegister OpenRegister { get; set; }
        public virtual IEnumerable<BookingDetail> BookingDetails { get; set; }

        // public virtual IEnumerable<Course> Courses { get; set; }
        public virtual IEnumerable<Class> Classes { get; set; }


}
}