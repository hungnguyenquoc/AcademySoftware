using System.Threading.Tasks;
using Academy.API.Dtos;

namespace Academy.API.Data
{
    public interface IEmail
    {
        Task Send(string emailAdress, string body, EmailOptionsDto options);
    }
}