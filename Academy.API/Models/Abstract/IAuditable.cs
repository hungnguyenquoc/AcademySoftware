using System;
using System.ComponentModel.DataAnnotations;

namespace Academy.API.Models
{
    public interface IAuditable
    {
        DateTime? CreatedDate { get; set; }

        [MaxLength(256)]
        string CreatedBy { get; set; }
        DateTime? UpdatedDate { get; set; }

        [MaxLength(256)]
        string UpdatedBy { get; set; }

        bool Status { get; set; }
    } 
}