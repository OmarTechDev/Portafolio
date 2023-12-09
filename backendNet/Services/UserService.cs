using System.Collections.Generic;
using System.Threading.Tasks;
using backendNet.Models;
using backendNet.Repository;

namespace backendNet.Services
{
  public class UserService : IUserService
  {
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
      _userRepository = userRepository;
    }

    public Task<List<User>> GetAllAsync()
    {
      return _userRepository.GetAllAsync();
    }

    public Task<User> GetByNameAsync(string name)
    {
      return _userRepository.GetByNameAsync(name);
    }

    public Task<User> GetByIdAsync(string id)
    {
      return _userRepository.GetByIdAsync(id);
    }

    public bool CheckDuplicateUserAsync(User user)
    {
      var existingUserByName = _userRepository.GetByNameAsync(user.Name);
      if (existingUserByName != null)
      {
        return true;
      }

      return false;
    }

    public Task<User> CreateAsync(User user)
    {
      return _userRepository.CreateAsync(user);
    }

    public Task UpdateAsync(string id, User user)
    {
      return _userRepository.UpdateAsync(id, user);
    }

    public Task DeleteAsync(string id)
    {
      return _userRepository.DeleteAsync(id);
    }
  }
}
