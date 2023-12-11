import express from "express"
import authController from "../controllers/authController"
import homeController from "../controllers/homeController"

import authMiddleware from "../middleware/authMiddleware"


let router = express.Router()

let initWebRoutes = (app) => {

    router.get('/', authMiddleware.checkLogin,homeController.getHomePage)

    router.get('/login', (req, res, next) => {
        if (req.cookies.token) {
            res.redirect('/')
        }else{
            next()
        }
    }, authController.getLoginPage)

    router.post('/api/login', authController.handleLogin)
    router.delete('/api/logout', authController.handleLogout)


    return app.use("/", router)
}

module.exports = initWebRoutes
