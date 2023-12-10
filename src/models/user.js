const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    fullName: String,
    phoneNumber: String
});
const User = mongoose.model('User', userSchema);

module.exports = User;