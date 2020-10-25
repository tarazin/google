const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;