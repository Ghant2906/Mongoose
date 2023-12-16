import bookService from "../services/bookService";
import userService from "../services/userService";
import typeService from "../services/typeService";
import authorService from "../services/authorService";

import renderItemTbHome from "../public/js/renderTbHome";
import dateCustom from "../public/js/dateCustom";

import { response } from "express";

let blockBook = async (req, res) => {
  const idBook = req.body.id;
  let books = await bookService.blockBook(idBook);
  if (books) {
    return res.status(200).json({
      books: renderItemTbHome(books),
    });
  } else {
    return res.status(500).json();
  }
};

let activeBook = async (req, res) => {
  const idBook = req.body.id;
  let books = await bookService.activeBook(idBook);
  if (books) {
    return res.status(200).json({
      books: renderItemTbHome(books),
    });
  } else {
    return res.status(500).json();
  }
};

let handleAddBook = async (req, res) => {
  let dataBook = req.body;
  const addBook = await bookService.addBook(dataBook);

  if (addBook) {
    res.redirect("/?alert=addSuccess");
  } else {
    res.redirect("/?alert=addFailure");
  }
};

let handleEditBook =async (req, res) => {
  let dataBook = req.body;
  const addBook = await bookService.editBook(dataBook);
  if (addBook) {
    res.redirect("/?alert=editSuccess");
  } else {
    res.redirect("/?alert=editFailure");
  }
};

let getAddBookPage = async (req, res) => {
  let user = userService.getUserCurrent(req.cookies.token);
  const types = await typeService.getAllType();
  const authors = await authorService.getAllAuthor();
  return res.render("pages/addBook.ejs", {
    title: "Thêm sách",
    user: user,
    types: types.allType,
    authors: authors.allAuthor,
  });
};

let getBookDetailPage = async (req, res) => {
  let user = userService.getUserCurrent(req.cookies.token);

  const idBook = req.query.id || null;
  let book = await bookService.getBook(idBook);
  const types = await typeService.getAllType();
  const authors = await authorService.getAllAuthor();
  book = {
    ...book._doc,
    publicationDate:dateCustom(book.publicationDate)
  }

  if (book) {
    return res.render("pages/editBook.ejs", {
      title: book.name,
      user: user,
      book: book,
      types: types.allType,
      authors: authors.allAuthor,
    });
  }
  return res.redirect("/");
};

module.exports = {
  blockBook: blockBook,
  activeBook: activeBook,
  handleAddBook: handleAddBook,
  getAddBookPage: getAddBookPage,
  getBookDetailPage: getBookDetailPage,
  handleEditBook:handleEditBook
};
