using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using backendNet.Models;
using backendNet.Repository;
using backendNet.Services;

namespace backendNet
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "MongoDB CRUD API", Version = "v1" });
      });

      services.Configure<DbConfiguration>(Configuration.GetSection("MongoDbConnection"));
      services.AddScoped<IPersonService,PersonService>();
      services.AddScoped<IPersonRepository,PersonRepository>();
      services.AddScoped<IUserService,UserService>();
      services.AddScoped<IUserRepository,UserRepository>();
      services.AddControllers();
      services.AddCors(options =>
      {
        options.AddDefaultPolicy(builder =>
        {
          Console.WriteLine("ASDASD: {0}", Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT"));
          if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development")
          {
            builder.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
          }
          else
          {
            builder.WithOrigins("https://delicate-lake-5083.fly.dev")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
          }
        });
      });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      app.UseSwagger();
      app.UseStaticFiles();
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "MongoDB CRUD API PORTAFOLIO V1");
      });

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors();
      app.UseHttpsRedirection();
      app.UseRouting();
      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
        endpoints.MapFallbackToFile("index.html");
      });
    }
  }
}
