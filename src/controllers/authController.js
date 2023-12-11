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

module.exports ={
    getLoginPage: getLoginPage,
    handleLogin: handleLogin,
    handleLogout: handleLogout
}