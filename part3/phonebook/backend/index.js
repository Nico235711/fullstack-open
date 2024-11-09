import express from "express";

const app = express();

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

app.get("/api/contacts", (req, res) => {
  res.json(contacts)
})

app.get("/info", (req, res) => {
  const contactsLength = contacts.length
  res.send(`<p>Phonebook has ${contactsLength} people</p><p>${new Date()}</p>`)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
