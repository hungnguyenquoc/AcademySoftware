using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Academy.API.Models
{
    [Table("OpenRegisterUsers")]

    public class OpenRegisterUser
    {
        public OpenRegister OpenRegister { get; set; }   
        public int OpenId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}