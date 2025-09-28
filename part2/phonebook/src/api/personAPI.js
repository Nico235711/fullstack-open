import axios from 'axios'

const BASE_URL = "http://localhost:3001/persons"

export const getPersons = () => axios(BASE_URL)
export const createPerson = (person) => axios.post(BASE_URL, person)
export const updatePersonById = (id, person) => axios.put(`${BASE_URL}/${id}`, person)
export const deletePersonById = (id, name) => axios.delete(`${BASE_URL}/${id}`)