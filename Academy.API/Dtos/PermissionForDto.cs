namespace Academy.API.Dtos
{
    public class PermissionForDto
    {
        public int ID { get; set; }
        public int RoleId { get; set; }
        public int FunctionId { get; set; }

        public bool CanCreate { set; get; } 

        public bool CanRead { set; get; }

        public bool CanUpdate { set; get; }

        public bool CanDelete { set; get; }
        public RoleForListDto Role { get; set; }
        public FunctionForListDto Function { get; set; }
    }
}