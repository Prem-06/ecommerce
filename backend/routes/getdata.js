const express=require('express')
const mongoose=require('mongoose')
const router=express.Router();
const fishdata=mongoose.model('FISH_DATA');

router.get('/getdata',(req,res)=>{
    fishdata.find().then((val)=>{
        return res.json({data:val})
    }).catch((err)=>{
        return res.json({error:"error"})
    })
})

module.exports=router