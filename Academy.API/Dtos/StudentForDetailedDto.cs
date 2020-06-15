using System;
using Microsoft.AspNetCore.Http;

namespace Academy.API.Dtos
{
    public class StudentForDetailedDto
    {
        public int Id { get; set; }
        public string Stu_Code { get; set; }
        public string Stu_Fullname { get; set; }
        public string Stu_Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Stu_Phone { get; set; }
        public string Stu_Email { get; set; }
        public string Stu_Facebook { get; set; }
        public string Identity_Card { get; set; }
        public int ClassId { get; set; }
        public IFormFile File { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public int Status { get; set; }
        public string Source {get;set;}

    }
}