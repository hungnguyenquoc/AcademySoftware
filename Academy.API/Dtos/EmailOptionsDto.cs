namespace Academy.API.Dtos
{
    public class EmailOptionsDto
    {
        public string Host {get;set;}
        public string APIKey {get;set;}
        public string APIKeySecret {get;set;}
        public int Port {get;set;}
        public string SenderEmail {get;set;}
    }
}