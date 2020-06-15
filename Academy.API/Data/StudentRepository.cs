using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public interface IStudentRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Student>> GetStudents();

        Task<IEnumerable<Student>> GetStudentsOfficial();
        Task<Student> GetStudent(int id);
        int GetStudentMaxID();
    }
    public class StudentRepository : IStudentRepository
    {
        private readonly AcademyDbContext _context;
        public StudentRepository(AcademyDbContext context)
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


        public int GetStudentMaxID()
        {
            int id = _context.Students.Max(c => c.Id);
            return id;          }

        public async Task<Student> GetStudent(int id)
        {
            var student = await _context.Students.FirstOrDefaultAsync(o => o.Id == id);
            return student;   
        }

        public async Task<IEnumerable<Student>> GetStudents()
        {
            var student = await _context.Students.OrderByDescending(f => f.Id).Where(s =>s.Status == 1).ToListAsync();
            return student;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Student>> GetStudentsOfficial()
        {
            var student = await _context.Students.OrderByDescending(f => f.Id).Where(s => s.Status != 1).ToListAsync();
            return student;
        }
    }
}