using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("OptionClasses")]
    public class OptionClass 
    {
        public Option Option { get; set; }   
        public int OptionId { get; set; }
        public Class Class { get; set; }
        public int Class_Id { get; set; }
    }
}