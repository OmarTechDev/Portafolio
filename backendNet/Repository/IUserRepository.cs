using System.Collections.Generic;
using System.Threading.Tasks;
using backendNet.Models;

namespace backendNet.Repository
{
  public interface IUserRepository
  {
    Task<List<User>> GetAllAsync();
    Task<User> GetByIdAsync(string id);
    Task<User> CreateAsync(User user);
    Task UpdateAsync(string id, User user);
    Task DeleteAsync(string id);
  }
}
