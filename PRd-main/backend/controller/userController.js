const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const {User} = require('../model/UserModel');
const {Userprofiles} = require('../model/UserProfileModel')
const registerUser = asyncHandler(async(req,res)=>{
    const{firstName,lastName,email,password} = req.body;
    console.log(firstName,lastName,email,password);
    if(!firstName||!lastName||!email||!password){
        res.status(400);
        throw new Error("Please add a Fields")
    }
     
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User Already Exits");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await User.create({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        token:generateJWT()
    });
    if(user){
        const Userprofile = await Userprofiles.create({
            name:user.firstName,
            email:user.email,
            contact:'',        
            location:'',
            qualification:'',
            qualificationPercentage:'',
            skill:'',
            acheivement:'',
            activity:'',
            project:'',
            areaofinterest:'',
            language:'',
            githublink:'',
            linkedinlink:'',
            discordlink:'',
            userProfileId:user._id
        })
        if(Userprofile){
            res.status(200).json({
                     name:user.firstName,
            email:user.email,
            contact:'',
          
            location:'',
            qualification:'',
            qualificationPercentage:'',
            skill:'',
            acheivement:'',
            activity:'',
            project:'',
            areaofinterest:'',
            language:'',
            githublink:'',
            linkedinlink:'',
            discordlink:'',
            userProfileId:user._id 
            })
        }
        res.status(200).json({
            _id: user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password,
            token:generateJWT(user.id)

        })
    }else{
        res.status(400);
        throw new Error("Invalid User Data");
    }
})

const loginUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body;
    const userID = await User.findOne({email});
    if(userID && (await bcrypt.compare(password,userID.password))){
        res.json({
            _id: userID.id,
            firstName:userID.firstName,
            lastName:userID.lastName,
            email:userID.email,
            token:generateJWT(userID.id)
        });
    }
    else{
        res.status(400);
        throw new Error("Invalid Credentials")
    }

    res.json({message:"Logged In User"});
})
//Userprofile.findOne({ userId : req.user.id })
const getMe = asyncHandler(async(req,res) =>{
    const {_id,firstName,lastName,email,password} =await User.findById(req.user.id);

    res.status(200).json({
        id:_id,
        firstName,
        lastName,
        email,
        password
    });
   
})

const generateJWT =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    });
}



module.exports = {registerUser, loginUser, getMe};