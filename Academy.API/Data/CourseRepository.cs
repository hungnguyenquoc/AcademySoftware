using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class CourseRepository: ICourseRepository
    {
        private readonly AcademyDbContext _context;

        public CourseRepository(AcademyDbContext context)
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

        public async Task<Course> GetCourse(int id)
        {
            var course = await _context.Courses.FirstOrDefaultAsync( c => c.Id == id);
            return course;
        }

        public int GetCourseMaxID()
        {
            int id = _context.Courses.Max(c => c.Id);
            return id;
        }

        public async Task<IEnumerable<Course>> GetCourses()
        {
            var courses = await _context.Courses.OrderByDescending(c => c.Id).ToListAsync();
            return courses;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

    }
}