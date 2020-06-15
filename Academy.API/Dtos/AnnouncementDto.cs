using System;

namespace Academy.API.Dtos
{
    public class AnnouncementDto
    {
        public int Id { get; set; }

        public string Title { set; get; }
        public string Content { set; get; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public bool Status { get; set; }
        public bool HasRead { get; set; }
    }
}