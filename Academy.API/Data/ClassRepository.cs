using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class ClassRepository : IClassRepository
    {
        private readonly AcademyDbContext _context;

        public ClassRepository(AcademyDbContext context)
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

        public async Task<Class> GetClass(int id)
        {
            var className = await _context.Classes.FirstOrDefaultAsync(o => o.Id == id);
            return className;       
        }

        public async Task<IEnumerable<Class>> GetClasses()
        {
            var className = await _context.Classes.OrderByDescending(o => o.Id).ToListAsync();
            return className;        }

        public int GetClassMaxID()
        {
            int id = _context.OpenRegisters.Max(c => c.Id);
            return id;      
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}