import express from "express"
import authController from "../controllers/authController"
import homeController from "../controllers/homeController"
import bookController from "../controllers/bookController"
import authorController from "../controllers/authorController"
import typeController from "../controllers/typeController"


import authMiddleware from "../middleware/authMiddleware"


let router = express.Router()

let initWebRoutes = (app) => {

    router.get('/', authMiddleware.checkLogin,homeController.getHomePage)
    router.get('/editBook', authMiddleware.checkLogin,bookController.getBookDetailPage)
    router.post('/editBook', authMiddleware.checkLogin,bookController.handleEditBook)    
    router.get('/addBook', authMiddleware.checkLogin,bookController.getAddBookPage)
    router.post('/addBook', authMiddleware.checkLogin,bookController.handleAddBook)

    router.get('/tac-gia', authMiddleware.checkLogin,authorController.getHomePage)
    router.get('/tac-gia/edit',authMiddleware.checkLogin, authorController.getEditPage)
    router.post('/tac-gia/edit',authMiddleware.checkLogin, authorController.handleEditAuthor)

    router.get('/tac-gia/add',authMiddleware.checkLogin, authorController.getAddPage)
    router.post('/tac-gia/add',authMiddleware.checkLogin, authorController.handleAddAuthor)

    router.get('/profile',authMiddleware.checkLogin, homeController.getProfilePage)

    router.get('/login', (req, res, next) => {
        if (req.cookies.token) {
            res.redirect('/')
        }else{
            next()
        }
    }, authController.getLoginPage)

    router.post('/api/login', authController.handleLogin)
    router.delete('/api/logout', authController.handleLogout)
    router.put('/api/blockBook', bookController.blockBook)
    router.put('/api/activeBook', bookController.activeBook)
    router.post('/api/addAuthor', authorController.handleAddAuthor)
    router.put('/api/editAuthor', authorController.handleEditAuthor)

    router.get('/api/allAuthor', authorController.handleGetAllAuthor)
    router.get('/api/allType', typeController.handleGetAllType)
    router.post('/api/addType', typeController.handleAddType)
    router.delete('/api/deleteAuthor', authorController.deleteType)

    router.put('/api/profile',authMiddleware.checkLogin, authController.handleUpdateProfile)
    router.put('/api/changePass',authMiddleware.checkLogin, authController.handleChangePassword)

    router.get('/allUser', authController.allUser)
    
    return app.use("/", router)
}

module.exports = initWebRoutes
