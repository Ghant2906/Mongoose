import authorService from "../services/authorService"

let handleAddAuthor = async (req, res) => {
    let dataAuthor = req.body
    let data = await authorService.addAuthor(dataAuthor)
    res.status(200).json({
        data: data
    })
}

let handleEditAuthor = async (req, res) => {
    let dataAuthor = req.body
    let data = await authorService.editAuthor(dataAuthor)
    res.status(200).json({
        data: data
    })
}

let handleGetAllAuthor = async (req, res) => {
    let data = await authorService.getAllAuthor()
    if (data.errCode != 0) {
        return res.status(200).json({
            errCode: data.errCode,
            errMsg: data.errMsg
        })
    }
    res.status(200).json({
        errCode: data.errCode,
        allAuthor: data.allAuthor
    })
}

module.exports = {
    handleAddAuthor: handleAddAuthor,
    handleEditAuthor: handleEditAuthor,
    handleGetAllAuthor: handleGetAllAuthor
}