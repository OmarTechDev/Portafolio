using System.Collections.Generic;
using System.Threading.Tasks;
using backendNet.Models;

namespace backendNet.Repository
{
  public interface IPersonRepository
  {
    Task<List<Person>> GetAllAsync();
    Task<Person> GetByIdAsync(string id);
    Task<Person> CreateAsync(Person person);
    Task UpdateAsync(string id, Person person);
    Task DeleteAsync(string id);
  }
}
