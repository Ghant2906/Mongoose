import userService from "../services/userService";
import bookService from "../services/bookService";

let getHomePage = async (req, res) => {
  let user = userService.getUserCurrent(req.cookies.token);
  if (user === false) {
  }
  // Lấy giá trị của tham số 'get' từ URL
  const status = req.query.status || null;
  const q = req.query.q || null;
  // console.log(status,q)

  let books = await bookService.getAllBooks(status, q);

  if (books === false) {
  }
  const getParam = req.query;

  // Render the EJS template with the 'get' parameter
  return res.render("pages/home.ejs", {
    title: "Trang chủ",
    user: user,
    books: books,
    get: getParam,
  });
};

let addBookPage = async (req, res) => {
  let user = userService.getUserCurrent(req.cookies.token);

  return res.render("pages/addBook.ejs", {
    title: "Thêm sách",
    user: user
  });
};

module.exports = {
  getHomePage: getHomePage,
  addBookPage:addBookPage,
};
