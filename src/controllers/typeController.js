import typeService from "../services/typeService"

let handleGetAllType = async (req, res) => {
    let data = await typeService.getAllType()
    if (data.errCode != 0) {
        return res.status(200).json({
            errCode: data.errCode,
            errMsg: data.errMsg
        })
    }
    res.status(200).json({
        errCode: data.errCode,
        allType: data.allType
    })
}

module.exports = {
    handleGetAllType: handleGetAllType
}