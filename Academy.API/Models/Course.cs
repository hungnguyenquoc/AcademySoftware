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
        public int Cou_ID { get; set; }

        [MaxLength(256)]
        public string Cou_Name { get; set; }

        [MaxLength(256)]
        public string Cou_Alias { get; set; }

        [MaxLength(256)]
        public string Cou_Description { get; set; }

        public string Cou_Content { get; set; }

        [MaxLength(256)]
        public string Cou_Image { get; set; }

        [Column(TypeName ="xml")]
        public string Cou_MoreImages { get; set; }

        public decimal Cou_Price { get; set; }

        public decimal Cou_PromotionPrice { get; set; }

        public int? Cou_ViewCount { get; set; }

        [Required]
        public int CategoryID { get; set; }

        [ForeignKey("CategoryID")]
        public virtual CourseCategory CourseCategory { get; set; }

        [Required]
        public int Re_ID { get; set; }
        [ForeignKey("Re_ID")]
        public virtual OpenRegister OpenRegister { get; set; }

        public virtual IEnumerable<BookingDetail> BookingDetails { get; set; }

}
}