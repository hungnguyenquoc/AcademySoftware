using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace Academy.API.Dtos
{
    public class CourseForDetailedDto
    {
        public int Id { get; set; }
        public string CouName { get; set; }
        public string CouCode { get; set; }
        public string CouDescription { get; set; }
        public string CouContent { get; set; }
        public string CouImage { get; set; }
        public string CouMoreImages { get; set; }
        public decimal CouPrice { get; set; }
        public decimal CouPromotionPrice { get; set; }
        public int? CouViewCount { get; set; }
        public int? ProId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public bool Status { get; set; }
        // public IFormFile File { get; set; }
        // public IList<IFormFile> MultipleFiles { get; set; }

    }
}