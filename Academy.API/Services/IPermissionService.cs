using System.Collections.Generic;
using Academy.API.Infrastructure;
using Academy.API.Models;
using System.Linq;
namespace Academy.API.Services
{
   public interface IPermissionService : IRepository<Permission>
    {
        List<Permission> GetByUserId(int userId);
    }

    public class PermissionService : RepositoryBase<Permission>, IPermissionService
    {
        public PermissionService(IDbFactory dbFactory) : base(dbFactory)
        {
        }

        public List<Permission> GetByUserId(int userId)
        {
            var query = from f in DbContext.Functions
                        join p in DbContext.Permissions on f.ID equals p.FunctionId
                        join r in DbContext.Roles on p.RoleId equals r.Id
                        join ur in DbContext.UserRoles on r.Id equals ur.RoleId
                        join u in DbContext.Users on ur.RoleId equals u.Id
                        where u.Id == userId
                        select p; 
            return query.ToList();
        }
    }
}