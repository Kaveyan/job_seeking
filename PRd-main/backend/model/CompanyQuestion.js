const mongoose = require('mongoose');

const questionScheme = mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    q1:{
        type:String,
        required:true,
    },   q2:{
        type:String,
        required:true,
    },
    q3:{
        type:String,
        required:true,
    },
    q4:{
        type:String,
        required:true,
    },
    q5:{
        type:String,
        required:true,
    }, 
});

const companyQuestion = mongoose.model('companyquestion',questionScheme);

module.exports={companyQuestion};
