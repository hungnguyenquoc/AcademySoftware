using System.ComponentModel.DataAnnotations;

namespace Academy.API.Dtos
{
    public class UserForConfirmEmailDto
    {
        [Required]
        public string Token { get; set; }
        [Required]
        public string UserId { get; set; }
    }
}