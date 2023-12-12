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
let addType = async (type) => {
    return new Promise( async ( resolve, reject) => {



        try {
            let check  = await Type.findOne({
                name: type
            });
            if(check !== null){
                return resolve({
                    errCode: 1,
                    errMsg: 'Đã tồn tại'
                }); 
            }
            let newType = await Type.create({
                name : type
            })
            resolve({
                errCode: 0,
                data: newType
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllType: getAllType,
    addType:addType
}