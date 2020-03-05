using System.Threading.Tasks;
namespace Academy.API.Data
{
    public interface IEmail
    {
        Task Send(string emailAdress, string body)
    }
}