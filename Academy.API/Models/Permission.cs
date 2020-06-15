using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
     [Table("Permissions")]
    public class Permission
    {
        [Key]
        public int ID { get; set; }

        public int RoleId { get; set; }
        public int FunctionId { get; set; }

        public bool CanCreate { set; get; } 

        public bool CanRead { set; get; }

        public bool CanUpdate { set; get; }

        public bool CanDelete { set; get; }

        [ForeignKey("RoleId")]
        public Role Role { get; set; }

        [ForeignKey("FunctionId")]
        public Function Function { get; set; }
    }
}