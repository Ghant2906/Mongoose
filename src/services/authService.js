const User = require('../models/user');
const jwt = require('jsonwebtoken');

let handleLogin = (userName, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({ 'userName': { $regex: new RegExp(userName, 'i') }, 'password': password },
                { 'password': 0 });
            if (!user) {
                resolve({
                    errCode: 1,
                    errMsg: "not found"
                })
            } else {
                // delete user.password
                resolve({
                    errCode: 0,
                    user: user,
                    token: jwt.sign({ user: user }, "matkhaucucmanh")
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

let updateProfile = async (dataProfile) => {
    try {
        let user = await User.findOneAndUpdate({
            userName: dataProfile.userName
        }, {
            fullName: dataProfile.fullName,
            phoneNumber: dataProfile.phoneNumber
        }, { new: true, projection: { password: 0 } })
        return ({
            user: user,
            token: jwt.sign({ user: user }, "matkhaucucmanh")
        })
    } catch (error) {
        console.log(error);
    }

}

let allUser = async () => {
    let all = await User.find()
    return all
}

let changePassword = async (userName, oldPass, newPass) => {
    try {
        let checkPass = await User.findOne({
            'userName': userName,
            'password': oldPass
        })
        if (!checkPass) {
            return ({
                errCode: 1,
                errMsg: 'Sai mật khẩu'
            })
        } else {
            let user = await User.findOneAndUpdate({
                userName: userName
            }, {
                password: newPass
            }, { new: true, projection: { password: 0 } })
            return({
                errCode: 0,
                user: user
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    handleLogin: handleLogin,
    updateProfile: updateProfile,
    allUser: allUser,
    changePassword: changePassword
}