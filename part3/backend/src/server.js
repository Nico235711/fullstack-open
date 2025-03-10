import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { corsConfig } from "./config/cors.js";

export const server = express();

const STATE_CODE = Object.freeze({
  not_found: 404,
  bad_request: 400,
  created: 201,
  no_content: 204
})

const contacts = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122"
  }
]

// permito la lectura en formato JSON
server.use(express.json())

// uso morgan para ver las solicitudes HTTP
server.use(morgan("dev"))

// habilito los CORS
server.use(cors(corsConfig))

server.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  // Validaciones
  if (!name || !number) {
    return res.status(STATE_CODE.bad_request).json({ error: "Name or number are required" });
  }
  if (contacts.some(contact => contact.name === name)) {
    return res.status(STATE_CODE.bad_request).json({ error: "Name must be unique" });
  }

  const newContact = {
    id: Math.floor(Math.random() * 10000), // Generar ID único
    name,
    number
  };

  contacts.push(newContact);
  res.status(STATE_CODE.created).json(newContact);
  res.json(contacts)
})

server.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>")
})

server.get("/api/persons", (req, res) => {
  res.json(contacts)
})

server.get("/api/persons/:id", (req, res) => {
  const { id } = req.params
  // me aseguro si el id corresponde con el id del arreglo de contactos
  const idToNumber = typeof id === "string" ? Number(id) : id

  const person = contacts.find(contact => contact.id === idToNumber)
  // console.log(person);
  if (!person) {
    res.status(STATE_CODE.not_found).json({ error: "Contact not found" })
  }

  res.json(person)
})

server.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params
  const idToNumber = typeof id === "string" ? Number(id) : id

  const person = contacts.filter(contact => contact.id !== idToNumber)
  // console.log(person);
  if (!person) {
    res.status(STATE_CODE.not_found).json({ error: "Contact not found" })
  }

  res.status(STATE_CODE.no_content).json("Person deleted")
})

server.get("/info", (req, res) => {
  const contactsLength = contacts.length
  res.status(CODE_OK).send(`<p>Phonebook has ${contactsLength} people</p><p>${new Date()}</p>`)
})