import { useState } from "react"

const INITIAL_CONTACT = {
  name: "",
  number: ""
}

export const PersonForm = ({ persons, setPersons }) => {
  const [contact, setContact] = useState(INITIAL_CONTACT)
  const handleSubmit = (e) => {
    e.preventDefault()
    // if (newName.trim() === "") return
    if (Object.values(contact).includes("")) return
    if (persons.find(person => person.name === contact.name)) {
      alert(`${contact.name} is already added to phonebook`)
      setContact(INITIAL_CONTACT)
      return
    }
    setPersons([
      ...persons, 
      { id: persons.length + 1, ...contact }])
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
