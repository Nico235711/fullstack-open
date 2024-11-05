
const ContactDetails = ({ person }) => {
  const { name, number } = person

  return (
    <div>
      {
        Object.values(person).length === 0 ? (
          <p>No contact for show</p>
        ) : (
          <>
            <p>Name: {name} Number: {number}</p>
          </>
        )
      }
    </div>
  )
}

export default ContactDetails