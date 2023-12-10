const express = require("express")
const bodyParser = require("body-parser")
import initWebRoutes from "./routes/web"
const db = require('./config/mongoose')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const kittySchema = new db.Schema({
    name: String,
    age: String
});

const Kitten = db.model('Kitten', kittySchema);
const Kittenaa = db.model('Kitten222', kittySchema);

let test = async () => {


    const small = new Kitten({ name: 'small', age: '20' });
    await small.save();
}

let findData = async () => {
    try {
        const query = await Kitten.findOne({ 'name': 'small' });
        console.log(query);
        return query;
    } catch (error) {
        console.error('Error finding data:', error);
        throw error; // hoặc xử lý lỗi theo cách khác tùy thuộc vào nhu cầu của bạn
    }
};

initWebRoutes(app)

let port = process.env.PORT || 6969

app.listen(port, () => {
    console.log("Server listening on port: " + port)
})