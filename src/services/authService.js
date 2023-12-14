const User = require('../models/user');
const jwt = require('jsonwebtoken');

let handleLogin = (userName, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({ 'userName': { $regex: new RegExp(userName, 'i') }, 'password': password},
            { 'password': 0 });
            if(!user){
                resolve({
                    errCode: 1,
                    errMsg: "not found"
                })
            }else{
                // delete user.password
                resolve({
                    errCode: 0,
                    user: user,
                    token: jwt.sign({user: user }, "matkhaucucmanh")
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    handleLogin: handleLogin,
}