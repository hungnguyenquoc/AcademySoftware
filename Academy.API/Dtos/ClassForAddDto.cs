using System;
using System.Collections.Generic;
using Academy.API.Models;

namespace Academy.API.Dtos
{
    public class ClassForAddDto
    {
        public int Id { get; set; }
        public string Class_Code { get; set; }
        public string Class_Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Class_Address { get; set; }
        // public string StudyTime { get; set; }
        public int CourseId { get; set; }
        public ICollection<string> StudyTime { get; set; }
        // public Option[] StudyTimeGetDay { get; set; }
        public int Status { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
    }
}