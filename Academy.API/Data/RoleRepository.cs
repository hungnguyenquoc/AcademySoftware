using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class RoleRepository : IRoleRepository
    {
        private readonly AcademyDbContext _context;
        public RoleRepository(AcademyDbContext context)
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

        public async Task<Role> GetRole(int id)
        {
            var roleName = await _context.Roles.FirstOrDefaultAsync(r => r.Id == id);
            return roleName;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        // public Task<Role> GetRole(int id)
        // {
        //     throw new System.NotImplementedException();
        // }

        // public async Task<IEnumerable<Role>> GetRoles()
        // {
        //     var roles = await _context.Roles.ToListAsync();
        //     return roles;
        // }

        // public async Task<bool> SaveAll()
        // {
        //     return await _context.SaveChangesAsync() > 0;
        // }
    }
}