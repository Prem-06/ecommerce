const express=require('express')
const mongoose=require('mongoose')
const router=express.Router();
const fishdata=mongoose.model('FISH_DATA')

router.post('/setdata',(req,res)=>{
    const {fish,price,img_url,description,know_more,fish_type,origin}=req.body;

    const fish_detail=new fishdata({
        fish:fish,
        img_url:img_url,
        description:description,
        know_more:know_more,
        fish_type:fish_type,
        origin:origin,
        price:price
    })
    fish_detail.save().then(()=>{
        return res.json({message:"entry filled"})
    }).catch((err)=>{
        console.log(err)
        return res.json({message:"entry not filled"})})

})

module.exports=router