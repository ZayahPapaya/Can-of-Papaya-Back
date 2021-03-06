'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./book');

const app = express();
app.use(cors());

mongoose.connect(process.env.DBURL)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});
const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {
  response.send('test request received')
});
app.get('/library', async (request, response) => {
  const books = await Book.find({});
  // const books = await Book.find({author: 'Wizards RPG Team});
  response.send(books);
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));
