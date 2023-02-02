const  userServices = require('../services/userServices')

const getUserController = (req,res)=>{

    const result = userServices.getAllUserData()
    return res.status(200).json({data:result})
}

const postUserController = (req,res)=>{
    const result = userServices.postUserdata(req.body);
    return res.status(201).json(result)
}


module.exports = {getUserController,postUserController}