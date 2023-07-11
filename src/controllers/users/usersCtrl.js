
const expressAsyncHandler = require( "express-async-handler");
const User=require("../../model/User");

const registerUser=expressAsyncHandler( async(req,res)=>{
  const {email,firstname,lastname,password} = req?.body;
  const userExists=await User.findOne({email});
  if (userExists) throw new Error("user already exists");
try{


const user=await User.create({email,fistname,lastname,password});
res.status(200).json(user);
}
catch(error){
res.json(error);
  }
});

const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {

  //check if user id is valid

  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

const loginUserCtrl = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exists
  const userFound = await User.findOne({ email });
  //Check if password is match
  if (userFound && (await userFound?.isPasswordMatched(password))) {
    res.json({
      _id: userFound?._id,
      firstName: userFound?.firstName,
      lastName: userFound?.lastName,
      email: userFound?.email,
      isAdmin: userFound?.isAdmin,
      token: generateToken(userFound?._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Login Credentials");
  }
});






module.exports={registerUser ,fetchUsersCtrl};
