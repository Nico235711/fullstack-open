import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { deleteContact, getAllContacts } from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    getAllContacts()
      .then(response => setPersons(response.data))
      .catch(error => console.log(error))
  }, [persons]); // esto se ejecuta cada vez que cambie persons
  
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        search={search}
        setSearch={setSearch} 
      />
      <h2>add a new</h2>
      <PersonForm persons={persons} />
      <h2>Numbers</h2>
      {persons.length === 0 ? (
        <p>No Numbers</p>
      ) : (
        <>
          {filteredPersons.map(person => (
            <div>
              <p key={person.id}>
                {person.name} {person.number}
                <button
                  type="button"
                  onClick={() => deleteContact(person.name, person.id)}
                >delete</button>
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default App