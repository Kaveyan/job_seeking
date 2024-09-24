const mongoose = require('mongoose');

const CreatePostSchema = mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    technology:[
        {type:String,required:true}
    ],
    salary:{
        type:String,required:true
    },
    CompanyID:{
        type:String,
        required:true
    }
})


const CreatePost = mongoose.model('Jobs',CreatePostSchema);

module.exports = CreatePost;