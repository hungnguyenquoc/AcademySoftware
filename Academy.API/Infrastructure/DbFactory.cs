using Academy.API.Data;

namespace Academy.API.Infrastructure
{
   public class DbFactory : Disposable, IDbFactory
    {
        private AcademyDbContext dbContext;

        public AcademyDbContext Init()
        {
            return dbContext ?? (dbContext = new AcademyDbContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }

        AcademyDbContext IDbFactory.Init()
        {
            throw new System.NotImplementedException();
        }
    }
}