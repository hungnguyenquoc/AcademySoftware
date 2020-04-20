using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("CourseCategories")]
    public class CourseCategory : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Cate_ID { get; set; }
        public string Cate_Name { get; set; }
        public string Cate_Alias { get; set; }
        public string Cate_Description { get; set; }
        public string Cate_Image { get; set; }

    }
}