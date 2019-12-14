using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
     [Table("Posts")]
    public class Post : Auditable
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Post_ID { get; set; }

        [MaxLength(256)]
        public string Post_Name { get; set; }

        public string Post_Content { get; set; }

        [MaxLength(256)]
        public string Post_Image { get; set; }


    }
}