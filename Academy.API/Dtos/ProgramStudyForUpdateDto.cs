using System;

namespace Academy.API.Dtos
{
    public class ProgramStudyForUpdateDto
    {
        public string Pro_Name { get; set; }
        public string Pro_Code { get; set; }
        public string Pro_Description { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public bool Status { get; set; }
        public int MajorId { get; set; }
    }
}