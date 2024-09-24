const mongoose = require('mongoose');

const ApplySchema = mongoose.Schema({
    jobId:{
        type:String,
        required:true
    },
    companyId:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    }
});

const ApplyJob = mongoose.model('ApplyJob',ApplySchema)

module.exports ={ApplyJob};