const express = require('express');
const collection = require('./src/mongo');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.get("/",cors(),(req,res)=>{

})

app.post('/',async(req,res)=>{
    const {email,password} = req.body;

    try {
        const check=await collection.findOne({email: email});

        if(check){
            return res.status(400).json({msg:"User already exists"});
        }
        else {
            res.json("does not exist")
        }
    }
    catch(e){
        res.json("does not exist");
    }
});

app.post('/register',async(req,res)=>{
    const {email,password} = req.body;

    const data={
        email:email,
        password:password
    }

    try {
        const check=await collection.findOne({email: email});

        if(check){
            return res.status(400).json({msg:"User already exists"});
        }
        else {
            res.json("does not exist")
            await collection.insterMany([data]);  
        }
    }
    catch(e){
        res.json("does not exist");
    }
});

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
});