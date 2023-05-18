const express = require('express');
const collection = require('C:\\Users\\sanja\\OneDrive\\Desktop\\task\\loginpage\\src\\mongo.js');
const cors = require('cors');   
const app = express();
app.use (express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors)






app.get("/",cors(),(req, res) => {

    res.json("hello");
})

 




app.post("/",async(req,res) => {
    const{email,password} = req.body

 try{
        const check = await collection.findOne({email: email});
        console.log("checking")

        if(check){
            res.json("exist")
        }

        else{
            res.json("not exist")
        }
    }

    catch(e){  
            console.log(e)
    }
})




 


app.post("/register",async(req,res) => {
    const{email,password} = req.body
   


    const data ={email: email,
                 password: password}





try{
        const check = await collection.findOne({email: email})
        console.log(check);

        if(check){
            res.json("exist");
            console.log(check);
        }

        else{

            res.json("not exist")
            await collection.insertMany([data]);
            console.log(check);
        }
    }

    catch(e){  
            console.log(e)
    }
})

app.listen(9000,()=>{
    console.log("port connected")
})