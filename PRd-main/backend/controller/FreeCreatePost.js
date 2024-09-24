const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const FreelancerCreatePost = require('../model/FreelancerCreatePostModel');

const FreelancerPost = asyncHandler(async(req,res)=>{
    const {title,skill,description,salary} = req.body;
    if(!title || !skill || !description || !salary){
        res.status(400);
        throw new Error("Field is Empty!");
    }
    const FreePost = await FreelancerCreatePost.create({
        title,
        skill,
        description,
        salary,
        token:generateJWT()
    });
    if(FreePost){
        res.status(200).json({
            _id:FreePost.id,
            title:FreePost.title,
            skill:FreePost.skill,
            description:FreePost.description,
            salary:FreePost.salary,
            token:generateJWT(FreePost.id)
        })
    }else{
        res.status(400);
        throw new Error("Invalid Freelancer Post Type Data")
    }
})

const FreelancerPostList = asyncHandler(async(req,res)=>{
    try{
        const FreeLancerPostes = await FreelancerCreatePost.find();
            res.json(FreeLancerPostes);
    }catch(error){
        res.send(501).json({
            message:"Invalid"
        })
    }

})

const FreeDeletePost = asyncHandler(async(req,res)=>{
    try{
        const FreeJoBId = req.params.id;
        const deletedJob = await FreelancerCreatePost.findByIdAndDelete(FreeJoBId);
        console.log(deletedJob);
        if(!deletedJob){
            res.status(404);
            throw new Error("Job Not Found");
        }
        res.status(200).json({message:"Job deleted Sucessfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Error Deleting Job"});
    }
})

const generateJWT = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}


module.exports = {FreelancerPost,FreelancerPostList,FreeDeletePost};