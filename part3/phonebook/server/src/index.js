const express = require('express')
const morgan = require('morgan')
const db = require('./db.json')

const app = express()
app.use(express.json())
app.use(morgan("dev"))

app.get("/api/persons", (req, res) => {
  res.json(db)
})

app.get("/info", (req, res) => {
  const pElem = `<p>Phonebook has info for ${db.length} people</p>`
  const now = new Date()
  res.send(`${pElem}<p>${now}</p>`)
})

app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params
  const idToNumber = Number(id)
  const person = db.find(person => person.id === idToNumber)
  res.json(person)
})

app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params
  const idToNumber = Number(id)
  const person = db.filter(person => person.id !== idToNumber)
  res.json(person)
})

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body
  if (!name || !number) {
    res.status(400).json({ success: false, error: "missing name or number"})
    return
  }
  if (db.find(person => person.name === name)) {
    res.status(400).json({ success: false, error: "name must be unique"})
    return
  }
  const newPerson = {
    id: db.length + 1,
    name: req.body.name,
    number: req.body.number,
  }
  db.push(newPerson)
  res.json(db)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})