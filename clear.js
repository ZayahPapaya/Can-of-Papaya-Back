'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DBURL);
const Book = require('./book');

async function clear() {
  try {
    await Book.deleteMany({});
    console.log('Library deleted');
  } catch (error) {
    console.error('It brok: ',error);
  } finally {
    mongoose.disconnect();
  }
}

clear();
