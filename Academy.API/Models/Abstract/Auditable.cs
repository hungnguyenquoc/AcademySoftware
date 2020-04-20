using System;

namespace Academy.API.Models
{
    public abstract class Auditable : IAuditable
    {
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public int Status { get; set; }
        // int IAuditable.Status { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
}