const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    description: String,
    image:String,
    idAuthor: {
        type: Schema.Types.ObjectId,
        ref:'author'
    },
    idType:{
        type: Schema.Types.ObjectId,
        ref:'type'
    },
    publicationDate:Date,
    price: String,
    status: { type: Boolean, default: true }
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;