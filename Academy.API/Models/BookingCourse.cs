using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("BookingCourses")]
    public class BookingCourse: Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(256)]
        public string BookName { get; set; }

        [MaxLength(100)]
        public string BookEmail { get; set; }

        [MaxLength(100)]
        public string BookPhone { get; set; }

        [MaxLength(100)]
        public string BookCodeDiscount { get; set; }

        [MaxLength(256)]
        public string PaymentMethod { get; set; }

        [MaxLength(256)]
        public string PaymentStatus { get; set; }

        [Required]
        public int ClassId { get; set; }

        [ForeignKey("ClassId")]
        public virtual Class Class { get; set; }

        // public ICollection<BookingDetail> BookingDetails { get; set; }


        // public virtual IEnumerable<BookingDetail> BookingDetails { get; set; }
        // public virtual IEnumerable<Class> Classes { get; set; }

    }
}