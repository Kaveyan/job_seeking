const jwt  = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const CreatePost = require('../model/CreatePostModel');

const CreatePostCompany = asyncHandler(async(req,res)=>{
    const {companyName,profile,type,location,description,experience,technology,salary,CompanyID} = req.body;
    if(!companyName|| !location ||!profile || !type || !description || !experience || !technology || !salary|| !CompanyID){
        res.status(400);
        throw new Error("Field is Empty!");

    }
    const post = await CreatePost.create({
        companyName,
        profile,
        type,
        location,
        description,
        experience,
        technology,
        salary,
        CompanyID,
        token:generateJWT()
    });
    if(post){
        res.status(200).json({
            _id:post.id,
            companyName:post.profile,
            profile:post.profile,
            type:post.type,
            location:post.location,
            description:post.description,
            technology:post.technology,
            salary:post.salary,
            CompanyID:post.CompanyID,
            token:generateJWT(post.id)
        });
    }else{
        res.status(400);
        throw new Error("Invalid Post Type Data");
    }
}) 

const PostList = asyncHandler(async(req,res)=>{
    try{
        
        const jobs = await CreatePost.find({CompanyID:req.params.id});
        res.json(jobs);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

const ListJob = asyncHandler(async(req,res)=>{
    try{
        const listjob = await CreatePost.find();
        res.json(listjob);
    }catch(error){
        res.status(500).json({message:error.message})
    }
});


const DeletePost = asyncHandler(async(req,res)=>{
    try{
        const JobId = req.params.id;
        const deletedJob = await CreatePost.findByIdAndDelete(JobId);
        console.log(deletedJob)
        if(!deletedJob){
            res.status(404);
            throw new Error('Job not Found')
        }
        res.status(200).json({message:"Job deleted successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Error deleting job"});
    }
})


const generateJWT = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}



module.exports = {CreatePostCompany,PostList,DeletePost,ListJob};
