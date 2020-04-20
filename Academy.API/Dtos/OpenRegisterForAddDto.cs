using System;

namespace Academy.API.Dtos
{
    public class OpenRegisterForAddDto
    {
         public int Id { get; set; }
        public string ReName { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int CourseId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }

    }
}