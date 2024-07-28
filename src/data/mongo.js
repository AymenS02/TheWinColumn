const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://aymenshoteri:Anev3682013.@thewincolumn.0inb4jw.mongodb.net/")
.then(()=>{
    console.log("mongodb users connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection