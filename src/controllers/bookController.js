import bookService from "../services/bookService";

let blockBook = async (req, res) => {
  const idBook = req.body.id;
  let book = await bookService.blockBook(idBook);
  if (book) {
    return res.status(200).json({
      book: book
    });
  } else {
    return res.status(500).json();
  }
};

let activeBook = async (req, res) => {
  const idBook = req.body.id;
  let book = await bookService.activeBook(idBook);
  if (book) {
    return res.status(200).json({
      book: book
    });
  } else {
    return res.status(500).json();
  }
};

let handleAddBook = (req, res) => {
  let dataBook = req.body
  
}

module.exports = {
  blockBook: blockBook,
  activeBook: activeBook,
  handleAddBook: handleAddBook
};
