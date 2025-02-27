const express = require('express') //Importation
const app = express()
const cors = require('cors')
app.use(cors())
<<<<<<< HEAD
app.use(express.static('dist'))
=======
>>>>>>> a9b16d9f5838a3ec414467cade227d5b850d6568
let notes = [
    {
      id: "1",
      content: "HTML is easy",
      important: true
    },
    {
      id: "2",
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: "3",
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]


app.get('/api/notes', (req, res) => {
  res.json(notes)
})
// app.get('/api/notes/:id', (req, res) => {
//   const id = req.params.id
//   const note = notes.find(note => note.id === id)
//   if (note) {
//     res.json(note)
//   } else {
//     res.status(404).end()
//   }
// })
// app.delete('/api/notes/:id', (req, res) => {
//   const id = req.params.id
//   notes = notes.filter(note => note.id !== id)
//   res.status(204).end()
// })
const generatedId = () => {
  const maxId = notes.length > 0
  ? Math.max(...notes.map(n => Number(n.id)))
  : 0
  return String(maxId + 1)
}
app.use(express.json())
app.post('/api/notes', (req, res) => {
  console.log('POST request received')  
  const body = req.body

  if (!body.content) {
    return res.status(400).json({
      error:'content missing'
    })
  }
  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generatedId()
  } 
  notes = notes.concat(note)
  res.json(note)
  
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(process.env.PORT);
  
  console.log(`Server running on port ${PORT}`)
})
