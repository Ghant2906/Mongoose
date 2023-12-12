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
      .find({idAuthor:{$ne:null}})
      .exec();
    
    return books;
  } catch (error) {
    return false;
  }
};

const blockBook = async (idBook)=>{
  try{
  
    const book = await Book.updateOne({_id:idBook},{
      status:false
    });
    return book;

  }catch (error) {
    return false;
  }
}

const activeBook = async (idBook)=>{
  try{
    const book = await Book.updateOne({_id:idBook},{
      status:true
    });
    return book;

  }catch (error) {
    return false;
  }
}

module.exports = {
  getAllBooks: getAllBooks,
  blockBook:blockBook,
  activeBook:activeBook
};
