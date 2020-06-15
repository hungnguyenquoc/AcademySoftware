using System.Collections.Generic;
using Academy.API.Infrastructure;
using Academy.API.Models;
using System.Linq;
namespace Academy.API.Services
{
    public interface IFunctionService: IRepository<Function>
    {
        List<Function> GetListFunctionWithPermission(int userId);
    }
     public class FunctionService : RepositoryBase<Function>, IFunctionService
    {
        public FunctionService(IDbFactory dbFactory) : base(dbFactory)
        {
        }
        public List<Function> GetListFunctionWithPermission(int userId)
        {
            var query = (from f in DbContext.Functions
                         join p in DbContext.Permissions on f.ID equals p.FunctionId
                         join r in DbContext.Roles on p.RoleId equals r.Id
                         join ur in DbContext.UserRoles on r.Id equals ur.RoleId
                         join u in DbContext.Users on ur.UserId equals u.Id
                         where u.Id == userId && (p.CanRead == true)
                         select f);
            return query.ToList();
        }
    }
}