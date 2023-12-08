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
  public class NewPerson
  {
    public required string Id { get; set; }
    public required string Name { get; set; }
    public required string Number { get; set; }
    public string? Email { get; set; } // También aquí
  }
  public class PersonRepository : IPersonRepository
  {
    private readonly IMongoCollection<Person> _collection;
    private readonly DbConfiguration _settings;
    public PersonRepository(IConfiguration settings)
    {
      var mongoDbSettingsSection = settings.GetSection("MongoDbConnection");
      var mongoDbSettings = (mongoDbSettingsSection?.Get<DbConfiguration>()) ??
        throw new InvalidOperationException("Configuration for MongoDbConnection is not found or null");

      _settings = mongoDbSettings;
      var client = new MongoClient(_settings.ConnectionString);
      var database = client.GetDatabase(_settings.DatabaseName);
      _collection = database.GetCollection<Person>(_settings.CollectionPersons);
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
      var newPerson = new Person
      {
        Id = id,
        Name = person.Name,
        Number = person.Number,
        Email = person.Email
      };
      return _collection.ReplaceOneAsync(c => c.Id == id, newPerson);
    }
    public Task DeleteAsync(string id)
    {
      return _collection.DeleteOneAsync(c => c.Id == id);
    }
  }
}
