const express = require('express');
const dotenv = require('dotenv');
const prisma = require('./prisma');
// Load environment varaibles from .env file

dotenv.config();
// Define Express App
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
