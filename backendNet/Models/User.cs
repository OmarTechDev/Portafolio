using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace backendNet.Models
{
  public class User
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string Id { get; set; }

    [BsonElement("username")]
    public required string Username { get; set; }

    [BsonElement("name")]
    public required string Name { get; set; }

    [BsonElement("passwordHash")]
    public required string PasswordHash { get; set; }

  }
}
