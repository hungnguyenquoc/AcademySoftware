using System;
using Academy.API.Data;

namespace Academy.API.Infrastructure
{
    public interface IDbFactory: IDisposable
    {
        AcademyDbContext Init();
    }
}