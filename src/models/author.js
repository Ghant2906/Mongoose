const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new mongoose.Schema({
    name: String,
    dob:Date,
    gender:Boolean,
    status:{ type: Boolean, default: true },
});
const Author = mongoose.model('author', authorSchema);

module.exports = Author;