namespace backendNet.Models
{
  public class DbConfiguration
  {
    public required string CollectionName { get; set; }
    public required string ConnectionString { get; set; }
    public required string DatabaseName { get; set; }
  }
}
