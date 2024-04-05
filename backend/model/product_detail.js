const mongoose=require('mongoose');
const value=mongoose.Schema({
    fish:{
        type:String,
        required:true,
    },
    fish_type:{
      type:String,
      required:true
    },
    price:{
        type:Number,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    origin:{
        type:String,
        required:true
    },
    know_more:[{
        type:String,
        required:true
    }]

})

mongoose.model('FISH_DATA',value)