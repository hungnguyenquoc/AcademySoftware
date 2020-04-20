using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class OpenRegisterRepository : IOpenRegisterRepository
    {
        private readonly AcademyDbContext _context;

        public OpenRegisterRepository(AcademyDbContext context)
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

        public async Task<OpenRegister> GetOpenRegister(int id)
        {
            var openRegister = await _context.OpenRegisters.FirstOrDefaultAsync(o => o.Id == id);
            return openRegister;
        }

        public int GetOpenRegisterMaxID()
        {
            int id = _context.OpenRegisters.Max(c => c.Id);
            return id;
        }

        public async Task<IEnumerable<OpenRegister>> GetOpenRegisters()
        {
            var openRegisters = await _context.OpenRegisters.OrderByDescending(o => o.Id).ToListAsync();
            return openRegisters;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}