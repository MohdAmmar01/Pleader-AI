const mongoose=require("mongoose")
const connecttomongo=()=>
{
    mongoose.connect(process.env.MONGO_URI).then((data)=>{
        console.log('Connected to database successfully '+ data.Connection.name)
    }).catch((err)=>{
        console.log(err);
    })
};
module.exports=connecttomongo;
