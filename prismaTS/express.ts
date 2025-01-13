const express = require('express');
const dotenv = require('dotenv');
import { prisma } from './prisma';

// Load environment varaibles from .env file

dotenv.config();
// Define Express App
const app = express();

/// Set Port
const port = 3000;

app.get('/', async (req, res) => {
  // Create a new User
  await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    },
  });

  // Get all users
  const users = await prisma.user.findMany();

  // get user names
  const names = users.map((user) => user.name);

  // send response
  res.send(
    `There are ${names.length} users with the names of ${names.join(', ')}`
  );
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
