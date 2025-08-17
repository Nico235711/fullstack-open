import axios from "axios"

const API_URL = "http://localhost:3001"

export const getAllContacts = () => axios(`${API_URL}/persons`)
export const createNewContact = (contact) => {
  axios.post(`${API_URL}/persons`, contact)
}

export const deleteContact = (name, id) => {
  if (confirm(`Delete ${name}?`)) {
    axios.delete(`${API_URL}/persons/${id}`)
  }
}