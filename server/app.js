const express = require('express');
const mongoose = require('mongoose')

const cookieParser =require('cookie-parser')
const cors=require('cors');
require('dotenv').config();
const User = require("./Routes/user-routes")
const app=express();
app.use(cors());
app.use(cookieParser());
// now we can use the cokkie parser in our application
app.use(express.json());

app.use('/user',User)



mongoose.connect("mongodb+srv://mishal:msnunusam12@cluster0.ahogjcv.mongodb.net/").then(()=>{
 app.listen(5000);
 console.log("Database is connected! Listening to localhost 5000 ") 
}).catch((err)=>{
  console.log(err)
})