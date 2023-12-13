import Author from "../models/author"

let addAuthor = (dataAuthor) => {
    try {
        const author = Author.create({
          name: dataAuthor.name,
          dob : new Date(dataAuthor.dob),
          gender : dataAuthor.gender
        });
        return author;
      } catch (error) {
        return false;
      }
}


let editAuthor = async (dataAuthor) => {
    try{
        const filter = { _id: dataAuthor._id };
        const update = {
          name: dataAuthor.name,
          dob: new Date(dataAuthor.dob),
          gender: dataAuthor.gender
        };
        const author = await Author.findOneAndUpdate(filter, update, {
          new: true
        });
        return author;
      }catch(error){
        return false;
      }
}

let deleteAuthor = async (idAuthor) => {
    try{
        

        const check = await Author.findByIdAndDelete(idAuthor).exec()
        if(check){
            return check
        }
        return false
    }catch (error) {
        return false;
    }
}

let getAllAuthor = async (q=null) => {
    try {
        const query = {}
        if(q!==null){
            query.name = new RegExp(q.trim(), "i");
        }
        let allAuthor = await Author.find(query)
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

let getAuthor = async (id) => {
    try{
        const author = await Author.findById(id).exec();
        if(author){
            return author;
        }
        return false;
    }catch(error) {
        return false;
    }
}

module.exports = {
    addAuthor: addAuthor,
    editAuthor: editAuthor,
    deleteAuthor: deleteAuthor,
    getAllAuthor: getAllAuthor,
    getAuthor:getAuthor
}