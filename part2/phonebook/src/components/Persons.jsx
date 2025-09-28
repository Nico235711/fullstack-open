import { deletePersonById } from "../api/personAPI"

export const Persons = ({ search, persons }) => {
  const filteredPersons = search ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons

  const deletePerson = (id, name) => {
  if (confirm(`Delete ${name}?`)) {
    deletePersonById(id, name)
  }
}

  return (
    <div>
      {filteredPersons.map(person => (
        <div key={person.id}>
          <span>{person.name} - {person.number}</span> {""}
          <button
            type="button"
            onClick={() => deletePerson(person.id, person.name)}
          >delete</button>
        </div>
      ))}
    </div>
  )
}
