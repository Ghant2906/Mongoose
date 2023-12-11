const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new mongoose.Schema({
    name: String,
    dob:Date,
    gender:Boolean,
});
const Author = mongoose.model('author', authorSchema);

module.exports = Author;