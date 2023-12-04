using Microsoft.AspNetCore.Mvc;
using backendNet.Models;
using backendNet.Services;

namespace backendNet.Controller
{

  [ApiController]
  [Route("api/users")]
  public class UserController : ControllerBase
  {
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
      _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      Console.WriteLine("Here1");
      return Ok(await _userService.GetAllAsync().ConfigureAwait(false));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(string id)
    {
      Console.WriteLine("Here12");
      var user = await _userService.GetByIdAsync(id).ConfigureAwait(false);
      if (user == null)
      {
        return NotFound();
      }
      return Ok(user);
    }

    [HttpPost]
    public async Task<IActionResult> CreateUser(User user)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }
        await _userService.CreateAsync(user).ConfigureAwait(false);
        return Ok(user.Id);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> UpdateUser(string id, User userIn)
    {
      var user = await _userService.GetByIdAsync(id).ConfigureAwait(false);
      if (user == null)
      {
          return NotFound();
      }
      await _userService.UpdateAsync(id, userIn).ConfigureAwait(false);
      return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var user = await _userService.GetByIdAsync(id).ConfigureAwait(false);
        if (user == null)
        {
            return NotFound();
        }
        await _userService.DeleteAsync(user.Id).ConfigureAwait(false);
        return NoContent();
    }
  }
}
