using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;

namespace Academy.API.Data
{
    public interface IProgramStudyRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<bool> ProgramStudyExists(string proName);
        Task<IEnumerable<ProgramStudy>> GetProgramStudies();
        Task<ProgramStudy> GetProgramStudy(int id); 
    }
}