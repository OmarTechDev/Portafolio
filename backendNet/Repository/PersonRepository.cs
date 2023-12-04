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
  public class PersonRepository : IPersonRepository
  {
    private readonly IMongoCollection<Person> _collection;
    private readonly DbConfiguration _settings;
    public PersonRepository(IConfiguration settings)
    {
      Console.WriteLine(settings);
      Console.WriteLine("===============================================================");
      var mongoDbSettingsSection = settings.GetSection("MongoDbConnection");
      var mongoDbSettings = (mongoDbSettingsSection?.Get<DbConfiguration>()) ??
        throw new InvalidOperationException("Configuration for MongoDbConnection is not found or null");

      _settings = mongoDbSettings;
      var client = new MongoClient(_settings.ConnectionString);
      var database = client.GetDatabase(_settings.DatabaseName);
      _collection = database.GetCollection<Person>(_settings.CollectionName);
    }

    public Task<List<Person>> GetAllAsync()
    {
      return _collection.Find(c => true).ToListAsync();
    }
    public Task<Person> GetByIdAsync(string id)
    {
      return _collection.Find(c => c.Id == id).FirstOrDefaultAsync();
    }
    public async Task<Person> CreateAsync(Person person)
    {
      await _collection.InsertOneAsync(person).ConfigureAwait(false);
      return person;
    }
    public Task UpdateAsync(string id, Person person)
    {
      return _collection.ReplaceOneAsync(c => c.Id == id, person);
    }
    public Task DeleteAsync(string id)
    {
      return _collection.DeleteOneAsync(c => c.Id == id);
    }
  }
}
