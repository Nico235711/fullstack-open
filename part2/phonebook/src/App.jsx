import { useEffect, useState } from 'react'
import ContactDetails from './components/ContactDetails'
import { createContact, deleteContactById, getAllContacts } from './services/person'
import FormPerson from './components/FormPerson'
import Heading from './components/Heading'

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

  const deleteContact = id => {
    if (window.confirm("Do you want to delete this contact?")) {
      deleteContactById(id)
      const filteredPersons = persons.filter(person => person.id !== id)
      setPersons(filteredPersons)
    }
  }

  return (
    <>
      <Heading text="PhoneBook" />
      <label htmlFor="filteredPerson">filte shown with</label>
      <input type="text" id='filteredPerson' onChange={searchFilteredPersons} />
      <Heading text="Add a New" />
      <FormPerson
        contact={contact}
        setContact={setContact}
        addContact={addContact}
        addNewContact={addNewContact}
      />
      <Heading text="Numbers" />

      {
        filteredPersons.length === 0 ? (
          persons.map(person => (
            <ContactDetails
              key={person.name}
              person={person}
              deleteContact={deleteContact}
            />
          ))) : (
          filteredPersons.map(person => (
            <ContactDetails
              key={person.id}
              person={person}
              deleteContact={deleteContact}
            />
          ))
        )
      }
    </>
  )
}

export default App