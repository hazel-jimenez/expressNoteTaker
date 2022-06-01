// Import express package
const express = require('express');
const path = require('path')
const notes = require('./db/db.json')

// Require the JSON file and assign it to a variable called `termData`
// const termData = require('./terms.json');
const PORT = 3004;

// Initialize our app variable by setting it to the value of express()
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
// Add a static route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/notes', (req, res) => {
    // `res.sendFile` is Express' way of sending a file
    // `__dirname` is a variable that always returns the directory that your server is running in
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

// app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api/notes', (req, res) => res.json(notes));
app.post('/api/notes', (req, res) => {
  res.json(notes)
  })

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
