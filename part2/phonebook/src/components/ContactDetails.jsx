import { deleteContactById } from "../services/person"

const ContactDetails = ({ person }) => {
  const { name, number, id } = person

  const handleDeleteContact = id => {
    if (window.confirm("Do you delete this contact?")) deleteContactById(id)
  }

  return (
    <div>
      {
        Object.values(person).length === 0 ? (
          <p>No contact for show</p>
        ) : (
          <>
            <p>Name: {name} Number: {number} {""} 
              <button type="button" onClick={() => handleDeleteContact(person.id)}>Delete</button>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ContactDetails