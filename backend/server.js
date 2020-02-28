const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
const db = require('./queries');
app.get('/users', db.getUsersByFirstName);
app.post('/upload_file', db.uploadFile);
app.post('/import_data', db.importData);