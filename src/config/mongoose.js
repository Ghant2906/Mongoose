// getting-started.js
const mongoose = require('mongoose');
import Book from "../models/book"
import Author from "../models/author"
import Type from "../models/type"
import User from "../models/user"


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://toanf2103:kutoan1346@cluster0.r3hd9ab.mongodb.net/Book_Management')
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Lỗi kết nối đến MongoDB:'));
db.once('open', function () {
    console.log('Đã kết nối đến MongoDB thành công');
});



const createBooks = async () => {
    try {
        // Create authors
        const author1 = new Author({
            name: 'Author 1',
            dob: new Date('1990-01-01'),
            gender: true,
        });

        const author2 = new Author({
            name: 'Author 2',
            dob: new Date('1985-05-15'),
            gender: false,
        });

        await Author.insertMany([author1, author2]);

        // Create types
        const type1 = new Type({
            name: 'Fiction',
        });

        const type2 = new Type({
            name: 'Non-fiction',
        });

        await Type.insertMany([type1, type2]);

        // Create books with different types
        const books = [];
        for (let i = 1; i <= 10; i++) {
            const authorId = i % 2 === 0 ? author1._id : author2._id;
            const typeId = i % 2 === 0 ? type1._id : type2._id;

            const bookData = {
                name: `Book ${i}`,
                quantity: 10,
                description: `Description ${i}`,
                image: `Image URL ${i}`,
                idAuthor: authorId,
                idType: typeId,
                publicationDate: new Date(),
                price: (i * 5),
            };

            books.push(bookData);
        }

        await Book.insertMany(books);

        console.log('Books created successfully.');
    } catch (error) {
        console.error('Error creating books:', error);
    }
};

// createBooks();

// let addUser = () => {
//     User.create({
//         userName: 'Toan',
//         password: '123',
//         fullName: "Toàn dốt",
//         phoneNumber: "034567853"
//     }).then((data) => {
//         console.log("Successful");
//     }).catch((err) => {
//         console.log(err);
//     })
// }

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