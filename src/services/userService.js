const User = require("../models/user");
const jwt = require("jsonwebtoken");

let getUserCurrent = (token) => {
  try {
    let user = jwt.verify(token, "matkhaucucmanh");
    return user.user;
  } catch (error) {
    return false;
  }
};
module.exports = {
  getUserCurrent: getUserCurrent,
};
