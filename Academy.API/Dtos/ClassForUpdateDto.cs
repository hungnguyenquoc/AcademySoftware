using System;
using Academy.API.Models;

namespace Academy.API.Dtos
{
    public class ClassForUpdateDto
    {
        // public string[] StudyTimeNames { get; set; }

        public string Class_Code { get; set; }
        public string Class_Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Class_Address { get; set; }
        public string StudyTime { get; set; }
        public Option[] StudyTimeGetDay { get; set; }

        public int CourseId { get; set; }
        public int Status { get; set; }   
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
    }
}