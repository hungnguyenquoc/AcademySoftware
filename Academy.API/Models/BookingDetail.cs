using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("BookingDetails")]
    public class BookingDetail: Auditable
    {
        // [Key]
        // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // public int BookDetail_ID { get; set; }
        public BookingCourse BookingCourse { get; set; }   
        public int Book_ID { get; set; }
        public Course Course { get; set; }
        public int Cou_ID { get; set; }
        // public int Book_ID { get; set; }

        // // [Key, Column(Order = 1)]
        // public int Course_ID { get; set; }
        // public int Quantity { get; set; }

        // [ForeignKey("Book_ID")]
        // public virtual BookingCourse BookingCourse { get; set; }

        // [ForeignKey("Course_ID")]
        // public virtual Course Course { get; set; }

    }
}