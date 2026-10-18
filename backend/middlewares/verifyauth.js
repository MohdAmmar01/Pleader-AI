const jwt =require("jsonwebtoken");
const User = require("../model/user.js");
const ErrorHander =require("./errorhandler.js");
 function verifyToken(req, res, next){
  let token = req.header("authentication");
  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }
 
  jwt.verify(token,'pleader-moiz2194', async(err, decoded) => {
    if (err) {
      return res.status(401).send({ message: err });
    }
    const user=await User.findById(decoded.id)
    if(user.activeSessions.includes(token)){
      req.id = decoded.id;
      req.user = user;
      next();
    }else{
      return res.status(401).json({"success":false, "message":"not authenticated" });
    }
  });
};

 

module.exports={verifyToken}