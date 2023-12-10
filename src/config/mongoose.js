// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://toanf2103:kutoan1346@cluster0.r3hd9ab.mongodb.net/Book_Management')
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Lỗi kết nối đến MongoDB:'));
db.once('open', function () {
    console.log('Đã kết nối đến MongoDB thành công');
});

const book = new mongoose.Schema({
    name: String,
    age: String
});

const Book = db.model('books', book);

let addUser = () => {
    User.create({
        userName: 'Toan',
        password: '123',
        fullName: "Toàn dốt",
        phoneNumber: "034567853"
    }).then((data) => {
        console.log("Successful");
    }).catch((err) => {
        console.log(err);
    })
}

// let findData = async () => {
//     try {
//         const query = await Kitten.findOne({ 'name': 'small' });
//         console.log(query);
//         return query;
//     } catch (error) {
//         console.error('Error finding data:', error);
//         throw error; // hoặc xử lý lỗi theo cách khác tùy thuộc vào nhu cầu của bạn
//     }
// };

module.exports = {
    mongoose: mongoose,
    db: db
}