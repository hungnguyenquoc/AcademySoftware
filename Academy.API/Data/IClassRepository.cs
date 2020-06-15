using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;

namespace Academy.API.Data
{
    public interface IClassRepository
    {
        bool CreateBook(List<int> optionId, Class classStudy);

        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        bool Save();
        // Task<IEnumerable<Class>> GetClasses();
        Task<IEnumerable<Class>> GetClasses();

        // Task<Class> GetClass(int id);
        Task<Class> GetClass(int id);
        Task<IEnumerable<Option>> GetOptions();

        int GetClassMaxID();
    }
}