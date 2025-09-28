import { useState } from 'react'
import { PersonForm } from './components/PersonForm'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'

const INITIAL_PERSONS = [
  { id: 1, name: "Arto Hellas", number: "040-123456" },
  { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
  { id: 3, name: "Dan Abramov", number: "12-43-234345" },
  { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" }
]

export const App = () => {
  const [persons, setPersons] = useState(INITIAL_PERSONS)
  const [search, setSearch] = useState("")

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        search={search}
        setSearch={setSearch} 
      />
      <PersonForm
        persons={persons}
        setPersons={setPersons} 
      />
      <h2>Numbers</h2>
      <Persons
        search={search}
        persons={persons} 
      />
    </div>
  )
}
