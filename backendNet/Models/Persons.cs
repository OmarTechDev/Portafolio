using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace backendNet.Models
{
  public class Person
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]
    public required string Name { get; set; }

    [BsonElement("email")]
    public string? Email { get; set; }

    [BsonElement("number")]
    [Required(ErrorMessage = "Phone number is required")]
    [RegularExpression(@"\d{2,3}-.*", ErrorMessage = "Not a valid phone number")]
    public required string Number { get; set; }
  }
}
