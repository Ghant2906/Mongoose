const Book = require("../models/book");
const jwt = require("jsonwebtoken");

const getAllBooks = async (status,q) => {
    try {
        const query={}
        if (status !== null) {
            query.status = status;
        }
        if(q !== null) {
            query.$or = [
                { 'name': new RegExp(q, 'i') },
                
                { 
                    'idAuthor.name': new RegExp(q, 'i')
                }
            ];
        }
        console.log(query);
        // Nếu status không phải là null, thêm điều kiện truy vấn cho status

        const books = await Book.find(query).populate('idAuthor idType').exec();
        // console.log(books);

        return books;
    } catch (error) {
        console.error('Error retrieving books:', error);
        throw error;
    }
};
module.exports ={
    getAllBooks:getAllBooks
}