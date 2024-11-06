
const FormPerson = ({ contact, setContact, addContact, addNewContact }) => {

  return (
    <>
      <form onSubmit={addContact}>
        <div>
          name:
          <input
            type='text'
            name="name"
            value={contact.name}
            onChange={addNewContact}
          />
        </div>
        <div>number:
          <input
            type="number"
            name="number"
            value={contact.number}
            onChange={addNewContact}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

    </>
  )
}

export default FormPerson