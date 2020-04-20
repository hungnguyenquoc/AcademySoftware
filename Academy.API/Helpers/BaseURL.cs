using Microsoft.AspNetCore.Http;

namespace Academy.API.Helpers
{
    public class BaseURL
    {
        public static string GetBaseUrl(HttpRequest request)
        {
            return request.Scheme + "://" + request.Host.ToString();
        }
    }
}