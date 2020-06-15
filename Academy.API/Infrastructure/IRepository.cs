using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Academy.API.Infrastructure
{
    public interface IRepository<T> where T: class
    {
        IEnumerable<T> GetMulti(Expression<Func<T, bool>> predicate, string[] includes = null);
        
    }
}