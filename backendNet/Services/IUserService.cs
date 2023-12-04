using System.Collections.Generic;
using System.Threading.Tasks;
using backendNet.Models;

namespace backendNet.Services
{
  public interface IUserService
  {
    Task<List<User>> GetAllAsync();
    Task<User> GetByIdAsync(string id);
    Task<User> CreateAsync(User user);
    Task UpdateAsync(string id, User User);
    Task DeleteAsync(string id);
  }
}
