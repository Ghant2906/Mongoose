const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    fullName: String,
    phoneNumber: String
});
const User = mongoose.model('user', userSchema);

module.exports = User;