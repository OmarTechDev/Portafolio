using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace backendNet
{
  public class Program
  {
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
      Host.CreateDefaultBuilder(args)
        .ConfigureAppConfiguration((hostingContext, config) =>
        {
          config.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
          config.AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true);
        })
        .ConfigureWebHostDefaults(webBuilder =>
        {
          webBuilder.UseStartup<Startup>();
          webBuilder.ConfigureKestrel(serverOptions =>
          {
            serverOptions.ListenAnyIP(8080);
          });
        });
  }
}
