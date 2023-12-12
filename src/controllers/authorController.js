import authorService from "../services/authorService";
import userService from "../services/userService";
import dateCustom from "../public/js/dateCustom";


let handleAddAuthor = async (req, res) => {
  let dataAuthor = req.body;
  let data = await authorService.addAuthor(dataAuthor);
  res.status(200).json({
    data: data,
  });
};

let handleEditAuthor = async (req, res) => {
  let dataAuthor = req.body;
  let data = await authorService.editAuthor(dataAuthor);
  res.status(200).json({
    data: data,
  });
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
  
  const authors = await authorService.getAllAuthor(q);
  return res.render("pages/author.ejs", {
    title: "Tác giả",
    user: user,
    authors: authors.allAuthor,
    get: getParam,
    dateCustom:dateCustom
  });
};
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

module.exports = {
  handleAddAuthor: handleAddAuthor,
  handleEditAuthor: handleEditAuthor,
  handleGetAllAuthor: handleGetAllAuthor,
  getHomePage: getHomePage,
  deleteType:deleteType
};
