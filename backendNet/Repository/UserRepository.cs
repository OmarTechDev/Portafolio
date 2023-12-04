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
    private readonly DbConfiguration _settings;
    public UserRepository(IConfiguration settings)
    {
      var mongoDbSettingsSection = settings.GetSection("MongoDbConnection");
      var mongoDbSettings = (mongoDbSettingsSection?.Get<DbConfiguration>()) ??
        throw new InvalidOperationException("Configuration for MongoDbConnection is not found or null");

      _settings = mongoDbSettings;
      var client = new MongoClient(_settings.ConnectionString);
      var database = client.GetDatabase(_settings.DatabaseName);
      _collection = database.GetCollection<User>(_settings.CollectionUsers);
    }

    public Task<List<User>> GetAllAsync()
    {
      return _collection.Find(userFilter=> true).ToListAsync();
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
      return _collection.ReplaceOneAsync(userFilter => userFilter.Id == id, user);
    }
    public Task DeleteAsync(string id)
    {
      return _collection.DeleteOneAsync(userFilter => userFilter.Id == id);
    }
  }
}
