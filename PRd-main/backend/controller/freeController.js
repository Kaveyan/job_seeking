const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Freelancer = require('../model/FreeModel');

const registerFreelancer = asyncHandler( async(req,res)=>{
    const {businessName,owner,contact,email,businessType,password} = req.body;
    console.log(businessName,owner,contact,email,businessType,password);

    if(!businessName || !owner || !contact || !email || !businessType || !password){
        res.status(400);
        throw new Error("Please add a Fields")
    }

    const FreeLancerExists = await Freelancer.findOne({email});
    if(FreeLancerExists){
        res.status(400);
        throw new Error("User Already Exists")
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const freelancer = await Freelancer.create({
        businessName,
        owner,
        contact,
        email,
        businessType,
        password:hashedPassword,
        token:generateJWT()
    });
    if(freelancer){
        res.status(200).json({
            _id:freelancer.id,
            businessName:freelancer.businessName,
            owner: freelancer.owner,
            contact:freelancer.contact,
            email:freelancer.email,
            businessType:freelancer.businessType,
            password:freelancer.password,
            token:generateJWT(freelancer.id)
        });
    }else{

        res.status(400);
        throw new Error("Invalid User Data");
    }

})

const loginFree = asyncHandler(async(req,res)=>{
    const { email,password} = req.body;
    const freelancer = await Freelancer.findOne({email});
    if(freelancer && (await bcrypt.compare(password,freelancer.password))){
        res.json({
            _id:freelancer.id,
            businessName:freelancer.businessName,
            owner:freelancer.owner,
            contact:freelancer.owner,
            email:freelancer.email,
            businessType:freelancer.businessType,
            password:freelancer.password,
            token:generateJWT(freelancer.id)
        })
    }
})


const generateJWT = (id) =>{

    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    });

}

module.exports = {registerFreelancer,loginFree};