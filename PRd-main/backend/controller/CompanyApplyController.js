const asyncHandler = require('express-async-handler');
const {ApplyJob} = require('../model/ApplyJob');

const companyApply = asyncHandler(async(req,res)=>{
    try{
        const companyapply = await ApplyJob.find({companyId:req.params.id});
    res.json(companyapply);
    }catch(error){
        res.status.json({message:error.message})
    }
})

module.exports = {companyApply};