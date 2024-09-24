const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const {companyUser} = require('../model/CompanyModel');


const registerCompany = asyncHandler(async(req,res)=>{
    const {companyName,owner,address,city,state,zipcode,country,email,contact,nominalcapital,industry,website,password,description} = req.body;
    if(!companyName|| !owner|| !address || !city|| !state || !zipcode || !country|| !email || !contact ||  !nominalcapital || !industry || !website || !password || !description ){
        res.status(400);
        throw new Error("Field is empty!")
    }
    const companyExists = await companyUser.findOne({email});
    if(companyExists){
        res.status(400);
        throw new Error("Already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);

    const company = await companyUser.create({
        companyName,
        owner,
        address,
        city,
        state,
        zipcode,
        country,
        email,
        contact,
        nominalcapital,
        industry,
        website,
        password:hashPassword,
        description,
        token:generateJWT()
    });

    if(company){
        res.status(200).json({
            _id:company.id,
            companyName:company.companyName,
            owner:company.owner,
            address:company.address,
            city:company.city,
            state:company.state,
            zipcode:company.zipcode,
            country:company.country,
            email:company.email,
            contact:company.contact,
            nominalcapital:company.nominalcapital,
            industry:company.industry,
            website:company.website,
            password:company.password,
            description:company.description,
            token:generateJWT(company.id)
        });
    }else{
        res.status(400);
        throw new Error("Invalid Company data");
    }


});


const loginCompany = asyncHandler(async(req,res) =>{
        const {email,password} = req.body;
        const company = await companyUser.findOne({email});
        if(company && (await bcrypt.compare(password,company.password))){
            res.json({
                _id:company.id,
                companyName:company.companyName,
                owner:company.owner,
                address:company.address,
                city:company.city,
                state:company.state,
                zipcode:company.zipcode,
                country:company.country,
                email:company.email,
                contact:company.contact,
                nominalcapital:company.nominalcapital,
                industry:company.industry,
                website:company.website,
                password:company.password,
                description:company.description,
                token:generateJWT(company.id)
            });
        }else{
            res.status(400);
            throw new Error("Invalid Data");
        }
})

const companygetme = asyncHandler(async(req,res)=>{
    const companyDetails = await companyUser.findById(req.user.id);
    res.status(200).json(companyDetails);
})

const generateJWT = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'});
}

module.exports ={registerCompany,loginCompany,companygetme};
