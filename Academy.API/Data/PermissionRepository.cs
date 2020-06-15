using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System;
using Academy.API.Services;

namespace Academy.API.Data
{
    public interface IPermissionRepository
    {
        void Add<T> (T entity) where T: class;
        void Delete<T> (T entity) where T: class;
        Task<bool> SaveAll();
        Task<Permission> GetByFunctionId(int functionId);
        Task<IEnumerable<Permission>> GetByUserId(int userId);

    }
    public class PermissionRepository : IPermissionRepository
    {
        private readonly AcademyDbContext _context;

        public PermissionRepository(AcademyDbContext context)
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

        public async Task<Permission> GetByFunctionId(int functionId)
        {
            var function = await _context.Permissions.FirstOrDefaultAsync( f => f.ID == functionId);
            return function;
        }
        public async Task<IEnumerable<Permission>> GetByUserId(int userId)
        {
            //    return _permissionService.GetByUserId(userId);
            var query = await (from f in _context.Functions
                        join p in _context.Permissions on f.ID equals p.FunctionId
                        join r in _context.Roles on p.RoleId equals r.Id
                        join ur in _context.UserRoles on r.Id equals ur.RoleId
                        join u in _context.Users on ur.RoleId equals u.Id
                        where u.Id == userId
                        select p).ToListAsync(); 
            return query;
        }
        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}