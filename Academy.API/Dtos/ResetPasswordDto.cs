using System.ComponentModel.DataAnnotations;

namespace Academy.API.Dtos
{
    public class ResetPasswordDto
    {
        [Required]
        public string Email { get; set; }
    }
}