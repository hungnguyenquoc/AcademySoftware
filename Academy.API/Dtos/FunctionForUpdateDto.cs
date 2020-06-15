namespace Academy.API.Dtos
{
    public class FunctionForUpdateDto
    {
        public string Name { set; get; }
        public string URL { set; get; }
        public int DisplayOrder { set; get; }
        public bool Status { set; get; }
        public string IconCss { get; set; }
    }
}