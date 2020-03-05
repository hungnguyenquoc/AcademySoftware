using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;

namespace Academy.API.Data
{
    public interface IMajorRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<bool> MajorExists(string majName);
        Task<IEnumerable<Major>> GetMajors();
        Task<Major> GetMajor(int id); 
    }
}