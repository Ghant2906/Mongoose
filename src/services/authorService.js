import author from "../models/author"

let addAuthor = (dataAuthor) => {
    return new Promise( async(resolve, reject) => {
        try {
            let newAuthor = await author.create({
                name: dataAuthor.name,
                dob: dataAuthor.dob,
                gender: dataAuthor.gender
            }) 
            resolve({
                errCode: 0,
                newAuthor: newAuthor
            })
        } catch (error) {
            reject(error)
        }
    })
}


let editAuthor = (dataAuthor) => {
    return new Promise( async(resolve, reject) => {
        try {
            let newAuthor = await author.findOneAndUpdate({
                name: dataAuthor.name,
                dob: dataAuthor.dob,
                gender: dataAuthor.gender
            }) 
            resolve({
                errCode: 0,
                newAuthor: newAuthor
            })
        } catch (error) {
            reject(error)
        }
    })
}

let deleteAuthor = (idAuthor) => {

}

module.exports = {
    addAuthor: addAuthor,
    editAuthor: editAuthor,
    deteleAuthor: deleteAuthor,
}