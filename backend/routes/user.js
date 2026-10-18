const express = require('express');
const router = express.Router();
const asyncerror = require('../middlewares/catchasyncerror');
const ErrorHandler = require('../middlewares/errorhandler');
const jwt = require('jsonwebtoken');
const User = require('../model/user.js')
const bcrypt = require('bcryptjs')
const { verifyToken } = require('../middlewares/verifyauth');
const cloudinary = require('cloudinary')
const otpGenerator = require('otp-generator')
const crypto = require('crypto');
const sendEmail = require('../utilis/sendEmail');
const SendForgetEmail = require('../utilis/sendForgetPaswordEmail');

router.post('/register', asyncerror(async (req, res, next) => {
  const { email, password ,name} = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(401).json({ success: false, message: 'User already exists' });
  }

  // Generate salt and hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const code=crypto.randomBytes(32).toString('hex')

  const  ExpireDate = new Date(Date.now() + 10 * 60000); 
  // Create the user with the hashed password
  const user = await User.create({ email, password: hashedPassword,name ,VerficationCode:code,VerificationCodeExpires:ExpireDate});
  
  sendEmail(email,code)

  const token = jwt.sign({ id: user._id }, 'pleader-moiz2194', { expiresIn: '7d' });

  res.status(200).json({ success: true,message:"Account activated! Check your email for verification instructions.", token });
}));



//verify email

router.post('/verify', asyncerror(async (req, res, next) => {
  const user=await User.findOne({"VerficationCode":req.body.code});
   if(user!==null  && user.VerificationCodeExpires>new Date(Date.now())){
    await User.updateOne({"VerficationCode":req.body.code},{"isVerified":true ,"VerficationCode":"","VerificationCodeExpires":""});
    return res.status(200).json({ success: true, message:"email verified succesfully" });
  
   }else{
    return res.status(401).json({"success":false,"message":"Invalid or Expired  Token provided"})
   }
  }
))

router.post('/login', asyncerror(async (req, res, next) => {
  const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    if(!user.isVerified  ){

     if(!(user.VerificationCodeExpires > new Date(Date.now())) ){

      const code=crypto.randomBytes(32).toString('hex')
      const  ExpireDate = new Date(Date.now() + 10 * 60000); 
      
      await User.updateOne({"email":email},{VerficationCode:code,"VerificationCodeExpires":ExpireDate});
      sendEmail(email,code)
     }
     return res.status(401).json({ success: false, message: 'Verify your email and then login , Kindly Check your Inbox' });
    }
    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    const activeSessions = user.activeSessions || [];
    const token = jwt.sign({ id: user._id }, 'pleader-moiz2194', { expiresIn: '7d' });

    if (activeSessions.length >= 2) {
      let sessions=[]
      sessions.push(token)
      user.activeSessions=sessions
      await user.save()
    }else{
      activeSessions.push(token);
      user.activeSessions = activeSessions;
      await user.save();
    }
      res.status(200).json({ success: true, token });
}))
router.post('/forgetPassword', asyncerror(async (req, res, next) => {
  const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    const code=crypto.randomBytes(32).toString('hex')

  const  ExpireDate = new Date(Date.now() + 1 * 60000); 
  // Create the user with the hashed password
  const u = await User.updateOne({ email},{ForgetPasswordCode:code,ForgetPasswordCodeExpires:ExpireDate});
   SendForgetEmail(user.email,code)

    res.status(200).json({ success: true, "message":"Instruction for resetting your password has been sent to your email" });
}))
router.post('/resetPassword', asyncerror(async (req, res, next) => {
  const {Newpassword,code}=req.body

  const user=await User.findOne({"ForgetPasswordCode":code});
  if(user!==null && user.ForgetPasswordCodeExpires>new Date(Date.now())){  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Newpassword, salt);

   await User.updateOne({"ForgetPasswordCode":code},{"password":hashedPassword ,"ForgetPasswordCode":"","ForgetPasswordCodeExpires":""});
   return res.status(200).json({ success: true, message:"Password changed successfully " });
 
  }else{
   return res.status(401).json({"success":false,"message":"Invalid or Expired  Token provided"})
  }
}))

router.get('/isloggedin',verifyToken, asyncerror(async (req, res, next) => {
    res.status(200).json({ success: true, user:req.user });
}))
router.post('/removeasession',verifyToken, asyncerror(async (req, res, next) => {
   const activeSessions=req.user.activeSessions|| []
   const newsessions = activeSessions.filter((element) => element !== req.body.token);
 
   await User.updateOne({"_id":req.user._id},{activeSessions:newsessions})   
    res.status(200).json({ success: true, "message":"session removed successfully" });
}))


module.exports = router