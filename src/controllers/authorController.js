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

module.exports = {
    handleAddAuthor: handleAddAuthor,
    handleEditAuthor: handleEditAuthor
}