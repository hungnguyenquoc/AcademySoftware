using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class MajorRepository : IMajorRepository
    {
        private readonly AcademyDbContext _context;

        public MajorRepository(AcademyDbContext context)
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

        public async Task<Major> GetMajor(int id)
        {
            var major = await _context.Majors.FirstOrDefaultAsync( m => m.Id == id);
            return major;
        }

        public async Task<IEnumerable<Major>> GetMajors()
        {
            var majors = await _context.Majors.ToListAsync();
            return majors;
        }

        public async Task<bool> MajorExists(string majName)
        {
            if(await _context.Majors.AnyAsync(x => x.Maj_Name == majName)) {
                return true;
            }
            return false;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

    }
}