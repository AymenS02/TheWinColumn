const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/register',async(req,res)=>{
    const {email,password} = req.body;

    try {
        const check=await collection.findOne({email: email});

        if(check){
            return res.status(400).json({msg:"User already exists"});
        }
    }
    catch(e){
        console.log(e);
    }
});