using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backendNet.Models
{
    public class Person
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("number")]
        public string Number { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }
    }
}
