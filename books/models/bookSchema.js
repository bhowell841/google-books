const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
   id: { type: String, require: true, unique: true },
   title: { type: String, require: true },
   author: { type: String, require: true },
   synopsis: { type: String },
   link: { type: String },
   image: { type: String },
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;