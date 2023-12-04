using System.Collections.Generic;
using System.Threading.Tasks;
using backendNet.Models;
using backendNet.Repository;

namespace backendNet.Services
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepository _personRepository;

        public PersonService(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        public Task<List<Person>> GetAllAsync()
        {
            return _personRepository.GetAllAsync();
        }

        public Task<Person> GetByIdAsync(string id)
        {
            return _personRepository.GetByIdAsync(id);
        }

        public Task<Person> CreateAsync(Person person)
        {
            return _personRepository.CreateAsync(person);
        }

        public Task UpdateAsync(string id, Person person)
        {
            return _personRepository.UpdateAsync(id, person);
        }

        public Task DeleteAsync(string id)
        {
            return _personRepository.DeleteAsync(id);
        }
    }
}
