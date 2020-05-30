using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Academy.API.Data
{
    public class OptionClassRepository 
    {
         private readonly AcademyDbContext _context;

        // public OptionClassRepository(AcademyDbContext context)
        // {
        //     _context = context;
        // }
        // public async Task<IEnumerable<OptionClass>> GetOptionClasses()
        // {
        //     var optionClasses = await _context.OptionClasses.ToListAsync();
        //     return optionClasses;
        // }

        // public async Task<OptionClass> GetOption(int id)
        // {
        //     var option = await _context.OptionClasses.FirstOrDefaultAsync( m => m.Id == id);
        //     return option;       
        // }
    }
}