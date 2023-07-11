const express = require('express');
const dotenv=require("dotenv");
const dbconnect=require("./config/dbconnect");
const{errorHandler,notFound}=require("./middlewares/errorMidlleware")
const userRoute=require("./routes/users/userRoute");

const app=express();
dotenv.config();
const logger=(req,res,next)=>{("am a logger");
next();
};

dbconnect();
app.use(express.json());


app.use('/',userRoute);
app.use(errorHandler);
app.use(notFound);








module.exports=app;
