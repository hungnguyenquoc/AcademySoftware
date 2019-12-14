using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("ProductTags")]
    public class ProductTag
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductTag_ID { get; set; }
        public int Cou_ID { get; set; }

        [MaxLength(50)]
        public string Tag_ID { get; set; }

        [ForeignKey("Cou_ID")]
        public virtual Course Course { get; set; }

        [ForeignKey("Tag_ID")]
        public virtual Tag Tag { get; set; }
    }
}