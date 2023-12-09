using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace backendNet.Models
{
  public class User
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("email")]
    public required string Email { get; set; }

    [BsonElement("name")]
    public required string Name { get; set; }

    [BsonElement("passwordHash")]
    public required string PasswordHash { get; set; }

    public void SetPassword(string password)
    {
      PasswordHash = BCrypt.Net.BCrypt.HashPassword(password);
    }

    public bool VerifyPassword(string password)
    {
      return BCrypt.Net.BCrypt.Verify(password, PasswordHash);
    }

  }
}
