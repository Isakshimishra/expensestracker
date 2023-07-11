const express = require('express');
const userRoute=express.Router();
const {registerUser,fetchUsersCtrl,loginUserCtrl} = require("../../controllers/users/usersCtrl")



userRoute.post('/register', function(req,res)
{
  registerUser
});
userRoute.post('/login', function(req,res)
{
  loginUserCtrl});

userRoute.get('/users',function(req,res){
  fetchUsersCtrl});


module.exports=userRoute;
