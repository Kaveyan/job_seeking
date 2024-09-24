const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const {Userprofiles} = require('../model/UserProfileModel');

const UserProfilesDetails = asyncHandler(async(req,res)=>{
  const {name,email,contact,location,qualification,qualificationPercentage,skill,acheivement,activity,project,areaofinterest,language,githublink,linkedinlink,discordlink}= req.body;  
    if(!name || !email || !contact || !location || !qualification || !qualificationPercentage || !skill || !acheivement || !activity || !project || !areaofinterest || !language || !githublink || !linkedinlink || !discordlink){
                res.status(400);
                throw new Error("Fill the Fields");
    }
    const profile = await Userprofiles.create({
        name,
        email,
        contact,
        location,
        qualification,
        qualificationPercentage,
        skill,
        acheivement,
        activity,
        project,
        areaofinterest,
        language,
        githublink,
        linkedinlink,
        discordlink,
        token:generateJWT()
    });
    if(profile){
        res.status(200).json({
            _id:profile.id,
            name:profile.name,
            email:profile.email,
            contact:profile.contact,
            location:profile.location,
            qualification:profile.qualification,
            qualificationPercentage:profile.qualificationPercentage,
            skill:profile.skill,
            acheivement:profile.acheivement,
            activity:profile.activity,
            project:profile.project,
            areaofinterest:profile.areaofinterest,
            language:profile.language,
            githublink:profile.githublink,
            linkedinlink:profile.linkedinlink,
            discordlink:profile.discordlink,
            token:generateJWT(profile.id)

        })
    }

})
const ProfileDetails = asyncHandler(async (req, res) => {  
    try{
        const profile = await Userprofiles.findOne({ userProfileId: req.params.id });
        res.status(200).json(profile);
    }
    catch(error){
        console.log("Error : ",error)
    }
 
  });
  

const updateProfile = asyncHandler(async(req,res)=>{
    const profile = await Userprofiles.findById(req.params.id);
    if(!profile){
        res.status(400);
        throw new Error('Profile Not Fount');
    }
    const updateProfile = await Userprofiles.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updateProfile);
})

const generateJWT = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'});
}


module.exports = {UserProfilesDetails,updateProfile,ProfileDetails};