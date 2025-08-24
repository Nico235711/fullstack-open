import { useState } from "react"
import { createNewContact } from "../services/contacts"

const INITIAL_VALUES = {
  name: "",
  number: ""
}

export const PersonForm = ({ persons }) => {
  const [newContact, setNewContact] = useState(INITIAL_VALUES)
  const handleChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.id]: e.target.value
    })
  }
  const handleNewContact = (e) => {
    e.preventDefault()
    if (persons.some(person => person.name === newContact.name)) {
      alert(`${newContact.name} is already added to phonebook`)
      return
    }
    createNewContact(newContact)
    setNewContact(INITIAL_VALUES)
  }

  return (
    <form onSubmit={handleNewContact}>
      <div>
        name:
        <input
          id='name'
          value={newContact.name}
          onChange={handleChange}
        />
      </div>
      <div>
        number:
        <input
          id='number'
          value={newContact.number}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
