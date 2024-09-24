const mongoose = require('mongoose');

const freeSchema = mongoose.Schema({
    businessName:{
        type:String,
        require:[true,"Business name isn't filled"]
    },
    owner:{
        type:String,
        require:[true,"Owner field isn't filled"]
    },
    contact:{
        type:Number,
        require:[true,"Contact field isn't filled"]
    },
    email:{
        type:String,
        require:[true,"Email field isn't filled"]
    },
    businessType:{
        type:String,
        require:[true,"Business Type field isn't filled"]
    },
    password:{
        type:String,
        require:[true,"Password field isn't filled"]
    }
},{
    timestamps:true
}
);

module.exports = mongoose.model('FreeLancer',freeSchema);
