using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;
namespace Academy.API.Data
{
    public interface IRoleRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Role>> GetRoles();
        Task<Role> GetRole(int id);
    }
}