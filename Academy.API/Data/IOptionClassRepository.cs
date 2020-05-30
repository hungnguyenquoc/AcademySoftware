using System.Collections.Generic;
using System.Threading.Tasks;
using Academy.API.Models;

namespace Academy.API.Data
{
    public interface IOptionClassRepository
    {
        Task<IEnumerable<OptionClass>> GetOptionClasses();
        Task<OptionClass> GetOption(int id); 
    }
}