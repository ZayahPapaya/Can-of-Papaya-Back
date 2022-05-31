'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: String,
  author: String,
  hardCover: Boolean,
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;