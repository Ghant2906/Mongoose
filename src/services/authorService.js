import Author from "../models/author"

let addAuthor = (dataAuthor) => {
    return new Promise( async(resolve, reject) => {
        try {
            let newAuthor = await Author.create({
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
            let newAuthor = await Author.findOneAndUpdate({
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

let getAllAuthor = async () => {
    try {
        let allAuthor = await Author.find()
        if(!allAuthor){
            return ({
                errCode: 1,
                errMsg: 'Not found'
            })
        }
        return ({
            errCode: 0,
            allAuthor: allAuthor
        })    
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    addAuthor: addAuthor,
    editAuthor: editAuthor,
    deteleAuthor: deleteAuthor,
    getAllAuthor: getAllAuthor
}