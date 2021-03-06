using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace Academy.API.Dtos
{
    public class CourseCategoryForAddDto
    {
        public int Cate_ID { get; set; }
        public string Cate_Name { get; set; }
        public string Cate_Alias { get; set; }
        public string Cate_Description { get; set; }
        public string Cate_Image { get; set; }
        public int Status { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public IList<IFormFile> MultipleFiles { get; set; }

    }
}