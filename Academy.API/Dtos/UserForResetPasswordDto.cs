using System.ComponentModel.DataAnnotations;

namespace Academy.API.Dtos
{
    public class UserForResetPasswordDto
    {
        [Required]
        public string Email { get; set; }
    }
}