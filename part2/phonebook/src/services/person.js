import axios from 'axios'

const url = "http://localhost:3001/persons"

export const getAllContacts = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

export const createContact = newContact => {
  const request = axios.post(url, newContact)
  return request.then(response => response.data)
}

export const deleteContactById = id => {
  const request = axios.delete(`${url}/${id}`)
  return request.then(response => response.data)
}