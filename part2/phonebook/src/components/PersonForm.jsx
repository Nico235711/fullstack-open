import { useState } from "react"
import { createPerson, updatePersonById } from "../api/personAPI"

const INITIAL_CONTACT = {
  name: "",
  number: ""
}

export const PersonForm = ({ persons }) => {
  const [contact, setContact] = useState(INITIAL_CONTACT)
  const handleSubmit = (e) => {
    e.preventDefault()
    // if (newName.trim() === "") return
    if (Object.values(contact).includes("")) return
    if (persons.find(person => person.name === contact.name)) {
      alert(`${contact.name} is already added to phonebook, replace the old number with a new one?`)
      const person = persons.find(person => person.name === contact.name)
      console.log(person);
      
      updatePersonById(person.id, { ...person, number: contact.number })
      setContact(INITIAL_CONTACT)
      return
    }
    createPerson(contact)
    setContact(INITIAL_CONTACT)
  }

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.id]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>add a new</h2>
      <div>
        name: {""}
        <input
          type='text'
          id='name'
          value={contact.name}
          onChange={handleChange}
        />
      </div>
      <div>number: {""}
        <input
          type='text'
          id='number'
          value={contact.number}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>)
}
