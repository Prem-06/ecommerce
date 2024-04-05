const mongoose=require('mongoose');
const value=mongoose.Schema({
    cart_detail:[
        {
            id:{
               type:String,
               required:true 
            },
            fish:{
                type:String,
               required:true 
            },
            piece_size:{
                type:String,
                required:true 
            },
            cut_option:{
                type:String,
                required:true 
            },
            amount:{
                type:Number,
                required:true 
            },
            bill:{
                type:Number,
                required:true 
            }

        }
    ],
    total_bill:{
        type:Number,
        required:true 
    }

})

mongoose.model('CHECKOUT_DATA',value)