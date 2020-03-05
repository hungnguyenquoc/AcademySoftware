using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class CourseCategoryRepository : ICourseCategoryRepository
    {
        private readonly AcademyDbContext _context;

        public CourseCategoryRepository(AcademyDbContext context)
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

        // public async Task<IEnumerable<CourseCategory>> GetCourseCategories()
        // {
        //     var courseCategories = await _context.CourseCategories.ToListAsync();

        //     return courseCategories;
        // }

        // public async Task<CourseCategory> GetCourseCategory(int id)
        // {
        //     var courseCate = await _context.CourseCategories.FirstOrDefaultAsync(c => c.Cate_ID == id);

        //     return courseCate;
        // }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}