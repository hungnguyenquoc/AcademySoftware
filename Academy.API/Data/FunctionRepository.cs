using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy.API.Models;
using Academy.API.Services;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public interface IFunctionRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T> (T entity) where T: class;
        Task<bool> SaveAll();
        Task<bool> FunctionExists(string name);
        Task<IEnumerable<Function>> GetFunctions();
        IEnumerable<Function> GetAllWithPermissions(int userId);
        Task<Function> GetFunction(int id);
    }
    public class FunctionRepository : IFunctionRepository
    {
        private readonly AcademyDbContext _context;
        public FunctionRepository(AcademyDbContext context)
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
        public async Task<Function> GetFunction(int id)
        {
            var function = await _context.Functions.FirstOrDefaultAsync(o => o.ID == id);
            return function;   
        }

        public async Task<IEnumerable<Function>> GetFunctions()
        {
            var functions = await _context.Functions.OrderByDescending(f => f.ID).ToListAsync();
            return functions;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public IEnumerable<Function> GetAllWithPermissions(int userId)
        {
            // var query = _functionService.GetListFunctionWithPermission(userId);
            // return query;
             var query = (from f in _context.Functions
                         join p in _context.Permissions on f.ID equals p.FunctionId
                         join r in _context.Roles on p.RoleId equals r.Id
                         join ur in _context.UserRoles on r.Id equals ur.RoleId
                         join u in _context.Users on ur.UserId equals u.Id
                         where u.Id == userId && (p.CanRead == true)
                         select f);
            return query.ToList();
        }

        public async Task<bool> FunctionExists(string name)
        {
            if(await _context.Functions.AnyAsync(f => f.Name == name))
            {
                return true;
            }
            return false;
        }
    }
}