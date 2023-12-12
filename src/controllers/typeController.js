import typeService from "../services/typeService";
import userService from "../services/userService";

let handleGetAllType = async (req, res) => {
  let data = await typeService.getAllType();
  if (data.errCode != 0) {
    return res.status(200).json({
      errCode: data.errCode,
      errMsg: data.errMsg,
    });
  }
  res.status(200).json({
    errCode: data.errCode,
    allType: data.allType,
  });
};

let handleAddType = async (req, res) => {
  let type = req.body.type;
  let data = await typeService.addType(type);
  
  if (data.errCode != 0) {
    return res.status(200).json({
      errCode: data.errCode,
      errMsg: data.errMsg,
    });
  }
  res.status(200).json({
    allType: data.data,
  });

}

module.exports = {
  handleGetAllType: handleGetAllType,
  handleAddType:handleAddType
};
