const express=require('express')
const app=express();
const mongoose=require('mongoose')
const port=3000;
const cors=require('cors')
const uri='mongodb+srv://06prempal:5xkeCIgX9XwyK7mK@cluster0.c11eds1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect('mongodb://127.0.0.1:27017/intern').then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    console.log(err)
})
app.use(cors())
app.use(express.json())
require('./model/product_detail')
require('./model/checkout_model')
app.use(require('./routes/setdata'))
app.use(require('./routes/getdata'))
app.use(require('./routes/place_order'))

app.listen(port,()=>{
    console.log('server is running on port:3000')
})