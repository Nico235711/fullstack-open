import axios from 'axios'

const url = import.meta.env.BACKEND_URL

export const getAllContacts = async () => {
  const request = await axios.get(url)
  console.log(request);
  
  return request.then(response => response.data)
}

export const createContact = async newContact => {
  const request = axios.post(url, newContact)
  return request.then(response => response.data)
}

export const deleteContactById = async id => {
  const request = await axios.delete(`${url}/${id}`)
  return request.then(response => response.data)
}