const asyncHandler = require('express-async-handler');
const {companyQuestion} = require('../model/CompanyQuestion')

const CompanyQuestionList = asyncHandler(async(req,res)=>{
  try{
    const {companyId} = req.body;
      const listjob = await companyQuestion.find({companyId});
      res.json(listjob);
  }catch(error){
      res.status(500).json({message:error.message})
  }
});

const CreateQuestion = asyncHandler(async(req,res)=>{
  const {companyId,q1,q2,q3,q4,q5} = req.body;
  if(!companyId|| !q1 ||!q2 || !q3 || !q4 || !q5){
      res.status(400);
      throw new Error("Field is Empty!");

  }
  const post = await companyQuestion.create({
      companyId,q1,q2,q3,q4,q5
  });
  if(post){
      res.status(200).json({
          _id:post.id,
          companyId:post.companyId
          ,q1:post.q1
          ,q2:post.q2
          ,q3:post.q3
          ,q4:post.q4
          ,q5:post.q5
      });
  }else{
      res.status(400);
      throw new Error("Invalid Post Type Data");
  }
}) 



module.exports = { CompanyQuestionList,CreateQuestion };
