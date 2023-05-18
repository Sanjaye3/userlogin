const mongoose = require('mongoose');


const dbconnect = async () => { 
    try {
        await mongoose.connect("mongodb+srv://dummyuser:sanjayehere@cluster0.ik8645f.mongodb.net/?retryWrites=true&w=majority");
        console.log("db connected");
     }
    catch (error){
        console.log(error);
    }
}



dbconnect();


const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})


const collection = mongoose.model("collection",newSchema)


module.exports=collection