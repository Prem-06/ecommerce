const express=require('express')
const app=express();
const mongoose=require('mongoose')
const port=process.env.PORT||3000;
const cors=require('cors')
const uri=process.env.DB_URL;
mongoose.connect(uri).then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    console.log(err)
})
app.use(cors())
app.use(express.json())
require('./model/product_detail')
require('./model/checkout_model')
app.get('/',(req,res)=>{
    res.send("server is working")
})
app.use(require('./routes/setdata'))
app.use(require('./routes/getdata'))
app.use(require('./routes/place_order'))

app.listen(port,()=>{
    console.log('server is running on port:3000')
})