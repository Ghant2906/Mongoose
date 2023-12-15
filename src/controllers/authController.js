import authService from "../services/authService"


let getLoginPage = (req, res) => {
    res.render('loginPage.ejs', {layout: false})
}

let handleLogin = async (req, res) => {
    let data = await authService.handleLogin(req.body.userName, req.body.password)
    if(data.errCode == 0){
        res.cookie('token', data.token);
        res.status(200).json({
            errCode: data.errCode,
            token: data.token
        })
    }else{
        res.status(200).json({
            errCode: data.errCode,
            errMsg: data.errMsg
        })
    }  
}

let handleLogout = (req, res) => {
    res.clearCookie('token');
    return res.status(200).json('delete token successful!')
}

let handleUpdateProfile = async (req, res) => {
    let dataProfile = req.body
    let data = await authService.updateProfile(dataProfile)
    res.cookie('token', data.token);
    res.status(200).json({
        user: data.user
    })
}

let allUser = async (req, res) => {
    let data = await authService.allUser()
    res.status(200).json({
        data: data
    })
}

let handleChangePassword = async (req, res) => {
    let oldPass = req.body.oldPassword
    let newPass = req.body.newPassword
    let userName = req.body.userName
    let data = await authService.changePassword(userName, oldPass, newPass)
    if(data.errCode != 0){
        res.status(200).json({
            errCode: data.errCode,
            errMsg: data.errMsg
        })
    }else{
        res.status(200).json({
            errCode: data.errCode,
            user: data.user
        })
    }
    
}

module.exports ={
    getLoginPage: getLoginPage,
    handleLogin: handleLogin,
    handleLogout: handleLogout,
    handleUpdateProfile: handleUpdateProfile,
    allUser: allUser,
    handleChangePassword: handleChangePassword
}