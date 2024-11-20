import express from "express";

const app = express();

const NOT_FOUND = 404

let contacts = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  // Validaciones
  if (!name || !number) {
    return res.status(400).json({ error: "Name and number are required" });
  }
  if (contacts.some(contact => contact.name === name)) {
    return res.status(400).json({ error: "Name must be unique" });
  }

  const newContact = {
    id: Math.floor(Math.random() * 10000), // Generar ID único
    name,
    number
  };

  contacts.push(newContact);
  res.status(201).json(newContact);
  res.json(contacts)
})

app.get("/api/persons", (req, res) => {
  res.json(contacts)
})

app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params
  const idToNumber = Number(id)
  
  const person = contacts.find(contact => contact.id === idToNumber)
  // console.log(person);
  if (!person) {
    res.status(NOT_FOUND).json({ error: "Contact not found" })
  }
  
  res.json(person)
})

app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params
  const idToNumber = Number(id)
  
  const person = contacts.filter(contact => contact.id !== idToNumber)
  // console.log(person);
  if (!person) {
    res.status(NOT_FOUND).json({ error: "Contact not found" })
  }
  
  res.json(person)
})

app.get("/info", (req, res) => {
  const contactsLength = contacts.length
  res.send(`<p>Phonebook has ${contactsLength} people</p><p>${new Date()}</p>`)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
