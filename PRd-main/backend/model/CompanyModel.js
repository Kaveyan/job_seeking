const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    companyName:{
        type:String,
        required:[true,"Company Name field isn't filled"]
    },
    owner:{
        type:String,
        required:[true,"Owner field isn't filled"]
    },
    address:{
        type:String,
        required:[true,"Address field isn't filled"]
    },
    city:{
        type:String,
        required:[true,"City field isn't filled"]
    },
    state:{
        type:String,
        required:[true,"State field isn't filled"]
    },
    zipcode:{
        type:Number,
        required:[true,"Number field isn't filled"]
    },
    country:{
        type:String,
        required:[true,"Country field isn't filled"]
    },
    email:{
        type:String,
        required:[true,"Email field isn't filled"]
    },
    contact:{
        type:String,
        required:[true,"Contact field isn't filled"]
    },
    nominalcapital:{
        type:String,
        required:[true,"Nominal Capital field isn't filled"]
    },
    industry:{
        type:String,
        required:[true,"Industry field isn't filled"]
    },
    website:{
        type:String,
        required:[true,"Website field isn't filled"]
    },
    password:{
        type:String,
        required:[true,"Password field isn't filled"]
    },
    description:{
        type:String,
        required:[true,"Company Description field isn't filled"]
    }
       
});

const companyUser = mongoose.model('Company',CompanySchema);

module.exports={companyUser};
