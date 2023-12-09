using Microsoft.AspNetCore.Mvc;
using backendNet.Models;
using backendNet.Services;

namespace backendNet.Controller
{

  [ApiController]
  [Route("api/login")]

  public class LoginController : ControllerBase
  {
    private readonly IUserService _userService;

    public LoginController(IUserService userService)
    {
      _userService = userService;
    }

    [HttpPost]
    public async Task<IActionResult> ReviewUser(User user)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest();
      }

      var existingUser = await _userService.GetByNameAsync(user.Name);

      if (existingUser != null && existingUser.VerifyPassword(user.PasswordHash))
      {
        return Ok(user);
      }

      return Unauthorized(new { error = "Invalid username or password" });
    }
  }
}
