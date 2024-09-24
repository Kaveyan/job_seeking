const mongoose = require('mongoose');


const FreeLancerSchema = mongoose.Schema({
    title:{
        type:String,
        require:[true,"Field is Empty"]
    },
    skill:{
        type:String,
        require:[true,"Field is Empty"]
    },
    description:{
        type:String,
        require:[true,"Field is Empty"]
    },
    salary:{
        type:String,
        require:[true,"Field is Empty"]
    }

})

module.exports = mongoose.model('FreelancerPost',FreeLancerSchema)