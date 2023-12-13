import authorService from "../services/authorService";
import userService from "../services/userService";
import dateCustom from "../public/js/dateCustom";
import { response } from "express";



let handleEditAuthor = async (req, res) => {
  let dataAuthor = req.body;
  let author = await authorService.editAuthor(dataAuthor);
  if (author) {
    res.redirect("/tac-gia?alert=editSuccess");
  } else {
    res.redirect("/tac-gia?alert=editFailure");
  }
};

let handleGetAllAuthor = async (req, res) => {
  let data = await authorService.getAllAuthor();
  if (data.errCode != 0) {
    return res.status(200).json({
      errCode: data.errCode,
      errMsg: data.errMsg,
    });
  }
  res.status(200).json({
    errCode: data.errCode,
    allAuthor: data.allAuthor,
  });
};

let getHomePage = async (req, res) => {
  const user = userService.getUserCurrent(req.cookies.token);
  const q = req.query.q || null;
  const getParam = req.query;
  const alert = req.query.alert || null;
  
  const authors = await authorService.getAllAuthor(q);
  return res.render("pages/author.ejs", {
    title: "Tác giả",
    user: user,
    authors: authors.allAuthor,
    get: getParam,
    dateCustom:dateCustom,
    alert:alert
  });
};

let getEditPage = async (req, res) => {
  const user = userService.getUserCurrent(req.cookies.token);
  const idAuthor = req.query.id || null;
  const author = await authorService.getAuthor(idAuthor);
  if(author === false){
    return res.redirect('/')
  }
  return res.render("pages/editAuthor.ejs", {
    title: author.name,
    user: user,
    author: author,
    dateCustom:dateCustom
  });

}

let deleteType = async (req, res) => {
  const idAuthor = req.body.id;
  console.log(idAuthor);
  const checkDeleteAuthor = await authorService.deleteAuthor(idAuthor);
  if (checkDeleteAuthor !== false) {
    return res.status(200).json({
      author: checkDeleteAuthor,
    });
  } else {
    return res.status(500).json();
  }

}

let getAddPage = async (req, res) => {
  const user = userService.getUserCurrent(req.cookies.token);
  return res.render("pages/addAuthor.ejs", {
    title: 'Thêm tác giả',
    user: user,
  });
}
let handleAddAuthor = async (req, res) => {
  let dataAuthor = req.body;
  let author = await authorService.addAuthor(dataAuthor);
  if (author) {
    res.redirect("/tac-gia?alert=addSuccess");
  } else {
    res.redirect("/tac-gia?alert=addFailure");
  }
}

module.exports = {
  handleAddAuthor: handleAddAuthor,
  handleEditAuthor: handleEditAuthor,
  handleGetAllAuthor: handleGetAllAuthor,
  getHomePage: getHomePage,
  deleteType:deleteType,
  getEditPage:getEditPage,
  getAddPage:getAddPage,
  handleAddAuthor:handleAddAuthor
};
