import axios from 'axios'

const url = import.meta.env.VITE_BACKEND_URL
// console.log(url);

export const getAllContacts = async () => {
  const request = await axios.get(url)
  
  return request.data
}

export const createContact = async newContact => {
  const request = await axios.post(url, newContact)
  return request.data
}

export const deleteContactById = async id => {
  const request = await axios.delete(`${url}/${id}`)
  return request.data
}