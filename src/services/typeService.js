import Type from "../models/type"

let getAllType = async () => {
    try {
        let allType = await Type.find()
        if(!allType){
            return ({
                errCode: 1,
                errMsg: 'Not found'
            })
        }
        return ({
            errCode: 0,
            allType: allType
        })    
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    getAllType: getAllType
}