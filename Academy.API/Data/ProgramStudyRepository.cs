using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
namespace Academy.API.Data
{
    public class ProgramStudyRepository : IProgramStudyRepository
    {
        private readonly AcademyDbContext _context;

        public ProgramStudyRepository(AcademyDbContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<IEnumerable<ProgramStudy>> GetProgramStudies()
        {
            var programStudies = await _context.ProgramStudies.ToListAsync();
            return programStudies;
        }

        public async Task<ProgramStudy> GetProgramStudy(int id)
        {
            var programStudy = await _context.ProgramStudies.FirstOrDefaultAsync( i => i.Id == id);
            return programStudy; 
        }

        public async Task<bool> ProgramStudyExists(string proName)
        {
            if(await _context.ProgramStudies.AnyAsync(x => x.Pro_Name == proName))
            {
                return true;
            }
            return false;
            // if(await _context.Users.AnyAsync(x => x.UserName == username)) {
            //     return true;
            // }
            // return false;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}