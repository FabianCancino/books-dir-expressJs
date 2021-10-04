const express = require('express')
const books = require('./books')
const port = 8080

const app = express();

app.use(express.json());
app.use('/api/v1/books', books);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})