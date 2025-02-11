import { deleteContactById } from "../services/person"
import Heading from "./Heading"

const ContactDetails = ({ person, deleteContact }) => {
  const { name, number, id } = person
  // console.log(id);

  return (
    <div>
      {
        Object.values(person).length === 0 ? (
          <p>No contact for show</p>
        ) : (
          <>
            <p>Name: {name} Number: {number} {""} 
              <button type="button" onClick={() => deleteContact(id)}>Delete</button>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ContactDetails