import { useEffect, useState } from 'react'
import FormFields from './components/FormFields'
import ContactDetails from './components/ContactDetails'
import { createContact, getAllContacts } from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [contact, setContact] = useState({
    name: "",
    number: "",
    id: 0
  })
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    getAllContacts()
      .then(response => setPersons(response))
      .catch("No contacts")
  }, []);

  const addNewContact = (event) => {
    // console.log(event.target);

    setContact({
      ...contact,
      [event.target.name]: event.target.value,
      id: `${persons.length + 1}`
    })
  }

  const addContact = (event) => {
    event.preventDefault()
    if (persons.every(statePerson => statePerson.name !== contact.name)) {
      // console.log("entro");

      setPersons([
        ...persons,
        contact
      ])
      createContact(contact)

      setContact({
        name: "",
        number: ""
      })
    }
  }

  const searchFilteredPersons = (event) => {
    const filteredPersons = persons.filter(person => person.name.toLocaleLowerCase() === event.target.value.toLocaleLowerCase())
    setFilteredPersons(filteredPersons)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <label htmlFor="filteredPerson">filte shown with</label>
      <input type="text" id='filteredPerson' onChange={searchFilteredPersons} />
      <h2>add a new</h2>
      <form onSubmit={addContact}>
        <FormFields
          contact={contact}
          setContact={setContact}
          addNewContact={addNewContact}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        filteredPersons.length === 0 ? (
          persons.map(person => (
            <ContactDetails
              key={person.name}
              person={person}
            />
          ))) : (
          filteredPersons.map(person => (
            <ContactDetails
              key={person.id}
              person={person}
            />
          ))
        )
      }
    </>
  )
}

export default App