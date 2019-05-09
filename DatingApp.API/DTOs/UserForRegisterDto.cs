using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(50,MinimumLength =6,ErrorMessage ="Password must be between 6 and 50 charaters long")]
        public string Password { get; set; }
    }
}
