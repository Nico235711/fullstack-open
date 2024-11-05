
const FormFields = ({ contact, setContact, addNewContact }) => {

  return (
    <>
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

    </>
  )
}

export default FormFields