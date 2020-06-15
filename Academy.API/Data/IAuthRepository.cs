using System.Threading.Tasks;
using Academy.API.Models;

namespace Academy.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
        int GetUserMaxID();
        Task<User> GetUser(int id);
        void Add<T>(T entity) where T: class;

        Task<bool> SaveAll();

    }
}