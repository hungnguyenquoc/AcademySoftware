using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;

namespace Academy.API.Data
{
    public interface IOpenRegisterRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<OpenRegister>> GetOpenRegisters();
        Task<OpenRegister> GetOpenRegister(int id);
        int GetOpenRegisterMaxID();
    }
}