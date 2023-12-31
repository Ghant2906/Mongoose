import userService from "../services/userService";
import bookService from "../services/bookService";
import typeService from "../services/typeService";
import authorService from "../services/authorService";


import renderItemTbHome from "../public/js/renderTbHome";
import { response } from "express";


let getHomePage = async (req, res) => {

  const alert = req.query.alert || null;


  let user = userService.getUserCurrent(req.cookies.token);
  if (user === false) {
  }
  // Lấy giá trị của tham số 'get' từ URL
  const status = req.query.status || null;
  const q = req.query.q || null;
  const order = req.query.order_by || null;
  

  let books = await bookService.getAllBooks(status, q, order);

  if (books === false) {
  }
  const getParam = req.query;

  // Render the EJS template with the 'get' parameter
  return res.render("pages/home.ejs", {
    title: "Trang chủ",
    user: user,
    books: books,
    get: getParam,
    dataTb: renderItemTbHome(books),
    alert: alert
  });
};

let getProfilePage = (req, res) => {
  let user = userService.getUserCurrent(req.cookies.token);
  res.render('pages/profile.ejs', {
    title: "Profile",
    user: user, 
  })
}




module.exports = {
  getHomePage: getHomePage,
  getProfilePage: getProfilePage
};
