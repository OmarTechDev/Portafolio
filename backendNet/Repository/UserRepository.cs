using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using backendNet.Models;

namespace backendNet.Repository
{
  public class UserRepository : IUserRepository
  {
    private readonly IMongoCollection<User> _collection;
    private readonly DbConfiguration? _settings;
    public UserRepository(IConfiguration settings)
    {
      if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development")
      {
        var mongoDbSettingsSection = settings.GetSection("MongoDbConnection");
        var mongoDbSettings = (mongoDbSettingsSection?.Get<DbConfiguration>()) ??
          throw new InvalidOperationException("Configuration for MongoDbConnection is not found or null");

        _settings = mongoDbSettings;
        var client = new MongoClient(_settings.ConnectionString);
        var database = client.GetDatabase(_settings.DatabaseName);
        _collection = database.GetCollection<User>(_settings.CollectionUsers);
      }
      else if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production")
      {
        var connectionString = Environment.GetEnvironmentVariable("MONGODB_CONNECTION_STRING");
        if (string.IsNullOrEmpty(connectionString))
        {
          throw new InvalidOperationException("MongoDB connection string is not configured.");
        }

        var client = new MongoClient(connectionString);
        var database = client.GetDatabase("Portafolio");
        _collection = database.GetCollection<User>("Users");
      }
      else
      {
        throw new InvalidOperationException("Unknown environment.");
      }
    }

    public Task<List<User>> GetAllAsync()
    {
      return _collection.Find(userFilter=> true).ToListAsync();
    }
    public Task<User> GetByNameAsync(string name)
    {
      return _collection.Find(userFilter=> userFilter.Name == name).FirstOrDefaultAsync();
    }
    public Task<User> GetByIdAsync(string id)
    {
      return _collection.Find(userFilter=> userFilter.Id == id).FirstOrDefaultAsync();
    }
    public async Task<User> CreateAsync(User user)
    {
      await _collection.InsertOneAsync(user).ConfigureAwait(false);
      return user;
    }
    public Task UpdateAsync(string id, User user)
    {
      var newUser = new User
      {
        Id = id,
        Email = user.Email,
        Name = user.Name,
        PasswordHash = user.PasswordHash,
      };
      return _collection.ReplaceOneAsync(userFilter => userFilter.Id == id, newUser);
    }
    public Task DeleteAsync(string id)
    {
      return _collection.DeleteOneAsync(userFilter => userFilter.Id == id);
    }
  }
}
