const { trusted } = require("mongoose");
const Book = require("../models/book");
const jwt = require("jsonwebtoken");

const getAllBooks = async (status, q) => {
  try {
    const query = {};

    if (status !== null) {
      query.status = status;
    }

    if (q !== null) {
      query.name = new RegExp(q.trim(), "i");
    }
    // Nếu status không phải là null, thêm điều kiện truy vấn cho status

    const books = await Book.find(query)
      .populate("idAuthor")
      .populate("idType")
      .find({ idAuthor: { $ne: null } })
      .exec();

    return books;
  } catch (error) {
    return false;
  }
};

const blockBook = async (idBook) => {
  try {
    const book = await Book.updateOne(
      { _id: idBook },
      {
        status: false,
      }
    );
    const books = await getAllBooks(null, null);
    return books;
  } catch (error) {
    return false;
  }
};

const activeBook = async (idBook) => {
  try {
    const book = await Book.updateOne(
      { _id: idBook },
      {
        status: true,
      }
    );
    const books = await getAllBooks(null, null);

    return books;
  } catch (error) {
    return false;
  }
};

const addBook = async (dataBook) => {
  try {
    const book = Book.create({
      name: dataBook.name.trim(),
      quantity: dataBook.quantity,
      description: dataBook.description.trim(),
      image: dataBook.image.trim(),
      idAuthor: dataBook.author,
      idType: dataBook.type,
      publicationDate: new Date(dataBook.date),
      price: dataBook.price,
      status: dataBook.status,
    });
    return book;
  } catch (error) {
    return false;
  }
};

const editBook = async (dataBook) => {
  try{
    console.log(dataBook)
    const filter = { _id: dataBook._id };
    const update = {
      name: dataBook.name.trim(),
      quantity: dataBook.quantity,
      description: dataBook.description.trim(),
      image: dataBook.image.trim(),
      idAuthor: dataBook.author,
      idType: dataBook.type,
      publicationDate: new Date(dataBook.date),
      price: dataBook.price,
      status: dataBook.status,
    };
    const book = await Book.findOneAndUpdate(filter, update, {
      new: true
    });
    return book;
  }catch(error){
    return false;
  }

};

const getBook = async (idBook) => {
  try {
    const book = await Book.findById(idBook).exec();
    return book;
  } catch (error) {
    return false;
  }
};

module.exports = {
  getAllBooks: getAllBooks,
  blockBook: blockBook,
  activeBook: activeBook,
  addBook: addBook,
  getBook: getBook,
  editBook:editBook
};
