let checkLogin = (req, res, next) => {
    if(!req.cookies.token){
        res.redirect('/login')
    } else{
        next()
    }
}

module.exports = {
    checkLogin: checkLogin
}