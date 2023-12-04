using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backendNet.Models
{
  public class Person
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string Id { get; set; }

    [BsonElement("name")]
    public required string Name { get; set; }

    [BsonElement("email")]
    public string? Email { get; set; }

    [BsonElement("number")]
    public int Number { get; set; }
  }
}
