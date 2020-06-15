using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class ClassRepository : IClassRepository
    {
        private readonly AcademyDbContext _context;

        public ClassRepository(AcademyDbContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);

        }

        public bool CreateBook(List<int> optionId, Class classStudy)
        {
            var options = _context.Options.Where(o => optionId.Contains(o.Id)).ToList();
            foreach(var option in options ) 
            {   
                var optionClass = new OptionClass()
                {
                    Class = classStudy,
                    Option = option
                };
                _context.Add(optionClass);
            }
            _context.Add(classStudy);
            return Save();             
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<Class> GetClass(int id)
        {
            var className = await _context.Classes.FirstOrDefaultAsync(o => o.Id == id);
            return className;
        //    var className = await (from cl in _context.Classes 
        //                           join optClass in _context.OptionClasses 
        //                           on cl.Id equals optClass.Class_Id
        //                           join opt in _context.Options
        //                           on optClass.OptionId equals opt.Id
        //                           where cl.Id == optClass.Class_Id
        //                          select new {
        //                              Id = cl.Id,
        //                              Class_Code = cl.Class_Code
        //                          }
        //                          ).FirstOrDefaultAsync(o => o.Id == id);
        //     return className;
            // return className = await (from cl in _context.Classes
            //                           orderby cl.Class_Code
            //                           select new {
            //                             Id = cl.Id, 
            //                             Class_Code = cl.Class_Code,
            //                             Class_Description = cl.Class_Description,
            //                             StartTime = cl.StartTime,
            //                             EndTime = cl.EndTime,
            //                             Class_Address = cl.Class_Address,
            //                             CourseId = cl.CourseId,
            //                             Status = cl.Status,
            //                             CreatedDate = cl.CreatedDate,
            //                             CreatedBy = cl.CreatedBy,
            //                             StudyTimeGetDay = (from ol in cl.OptionClasses join o in _context.Options
            //                                                  on ol.OptionId equals o.Id
            //                                                  select o.StudyTimeGetDay
            //                                                  ).ToList()
            //                        }
            //                       ).FirstOrDefaultAsync( o => o.Id == id);
            // return className;
            // return className.ToListAsync();
        }

        public async Task<IEnumerable<Class>> GetClasses()
        {
            var className = await _context.Classes.OrderByDescending(o => o.Id).ToListAsync();
            return className;        
        }

        public int GetClassMaxID()
        {
            int id = _context.OpenRegisters.Max(c => c.Id);
            return id;      
        }

        public async Task<IEnumerable<Option>> GetOptions()
        {
            var option = await _context.Options.OrderByDescending(o => o.Id).ToListAsync();
            return option;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved >= 0 ? true : false;
        }

      
        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }


        //

    }
}