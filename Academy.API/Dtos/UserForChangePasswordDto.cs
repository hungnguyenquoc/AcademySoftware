using System.ComponentModel.DataAnnotations;

namespace Academy.API.Dtos
{
    public class UserForChangePasswordDto
    {
        [Required]
        public string Token { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string Password { get; set; }
    }
}