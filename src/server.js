const express = require("express")
const bodyParser = require("body-parser")
const expressLayouts = require('express-ejs-layouts')
import initWebRoutes from "./routes/web"
require('./config/mongoose')
var cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("./src/public"))
app.set("view engine", "ejs")
app.set("views", "./src/views")
app.use(expressLayouts)
app.set('layout', './layout/main.ejs')


initWebRoutes(app)

let port = process.env.PORT || 6969

app.listen(port, () => {
    console.log("Server listening on port: " + port)
})