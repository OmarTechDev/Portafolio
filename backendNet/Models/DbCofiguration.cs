namespace backendNet.Models
{
  public class DbConfiguration
  {
    public required string ConnectionString { get; set; }
    public required string DatabaseName { get; set; }
    public required string CollectionPersons { get; set; }
    public required string CollectionUsers { get; set; }
  }
}
