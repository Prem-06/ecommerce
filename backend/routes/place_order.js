const express=require('express')
const mongoose=require('mongoose')
const router=express.Router();
const fishdata=mongoose.model('CHECKOUT_DATA');

router.post('/checkout', (req, res) => {
    const cart_data = req.body.cart_data;
    const total_bill = req.body.total_bill;
    const newFishData = new fishdata({
        cart_detail: cart_data,
        total_bill: total_bill
    });
    newFishData.save()
        .then(()=> {
            res.status(200).json({ message: 'Order booked successfully' });
        })
        .catch((error) => {
          
            console.error('Error saving fishdata:', error);
            res.status(500).json({ error: 'An error occurred during checkout' });
        });
});

module.exports=router