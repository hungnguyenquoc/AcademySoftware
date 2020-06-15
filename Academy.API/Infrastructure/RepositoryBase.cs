using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Academy.API.Data;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Infrastructure
{
    public abstract class RepositoryBase<T> : IRepository<T> where T : class
    {
        private AcademyDbContext context;

        protected IDbFactory DbFactory
        {
            get;
            private set;
        }

        protected AcademyDbContext DbContext
        {
            get { return context ?? (context = DbFactory.Init()); }
        }
        protected RepositoryBase(IDbFactory dbFactory)
        {
            DbFactory = dbFactory;
        }
      
        public virtual IEnumerable<T> GetMulti(Expression<Func<T, bool>> predicate, string[] includes = null)
        {
             if (includes != null && includes.Count() > 0)
            {
                var query = context.Set<T>().Include(includes.First());
                foreach (var include in includes.Skip(1))
                    query = query.Include(include);
                return query.Where<T>(predicate).AsQueryable<T>();
            }

            return context.Set<T>().Where<T>(predicate).AsQueryable<T>();
        }
    }
}