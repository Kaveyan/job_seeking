const { ObjectId } = require('mongodb');
const mongoose =  require('mongoose');

const UserProfileSchema = mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    contact:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    qualification:{
        type:String,
        required:false
    },
    qualificationPercentage:{
        type:String,
        required:false
    },
    skill:{
        type:String,
        required:false
    },
    acheivement:{
        type:String,
        required:false
    },
    activity:{
        type:String,
      required:false
    },
    project:{
        type:String,
        required:false
    },
    areaofinterest:{
        type:String,
        required:false
    },
    language:{
        type:String,
        required:false
    },
    githublink:{
        type:String,
      required:false
    },
    linkedinlink:{
        type:String,
        required:false
    },
    discordlink:{
        type:String,
        required:false
    },
    userProfileId:{
        type:ObjectId,
        required:true
    }

})

const Userprofiles =  mongoose.model('UserProfiles',UserProfileSchema)

module.exports = {Userprofiles};