const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { User } = require('../model/UserModel');
const {companyUser} = require('../model/CompanyModel');


const protect =asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')){
            try{

                token = req.headers.authorization.split(' ')[1];
                const decoded = jwt.verify(token,process.env.JWT_SECRET);

                req.user = await User.findById(decoded.id).select('-password');

                next();
            }catch(error){
                console.log(error);
                res.status(401);
                throw new Error('not authorized')
            }
        }
        else if(!token){
            res.status(401);
            throw new Error('not authorized, no token passed.');
        }
});

const CompanyProtect = asyncHandler(async(req,res,next)=>{
    console.log(req.headers)
    let companyToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            companyToken = req.headers.authorization.split(' ')[1];
            console.log(companyToken)
            const decoded = jwt.verify(companyToken,process.env.JWT_SECRET);
            req.user = await companyUser.findById(decoded.id).select('-password');
            next();
        }catch(error){
            console.log(error);
            res.status(401);
            throw new Error('not authorized');
        }
    }
    else if(!companyToken){
        res.status(401);
        throw new Error('not authorized, no token passed.');
    }
})
module.exports ={
    protect,CompanyProtect
}