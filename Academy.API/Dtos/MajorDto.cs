using System;

namespace Academy.API.Dtos
{
    public class MajorDto
    {
        public int Id { get; set; }
        public string Maj_Name { get; set; }
        public string Maj_Code { get; set; }
        public string Maj_Description { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public bool Status { get; set; }
    }
}