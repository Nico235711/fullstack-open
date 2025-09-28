
export const Persons = ({ search, persons }) => {

  return (
    <>
      {search ? (
        <>
          {persons
            .filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
            .map(person => (
              <p key={person.id}>{person.name} {person.number}</p>
            ))}
        </>
      ) : (
        <>
          {persons.map(person => (
            <p key={person.id}>{person.name} {person.number}</p>
          ))}
        </>
      )}
    </>
  )
}
