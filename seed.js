'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DBURL);

const Book = require('./book');

async function seed() {
  const myBook = new Book({
    name: 'Player\'s Handbook. 5th Edition',
    author: 'Wizards RPG Team',
    hardCover: true,
  });
  myBook.save(function (err) {
    if (err) console.log(err);
    else console.log('saved PHB');
  });
  // other style
  await Book.create({
    name: 'Dungeon Master\'s Guide. 5th Edition',
    author: 'Wizards RPG Team',
    hardCover: true,
  });
  console.log('saved DMG');
  await Book.create({
    name: 'Monster Manual. 5th Edition',
    author: 'Wizards RPG Team',
    hardCover: true,
  });
  console.log('saved MM');
  mongoose.disconnect();
}

seed();
