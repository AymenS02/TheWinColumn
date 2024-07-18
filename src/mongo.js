const mongoose=require('mongoose');
const { mod } = require('three/examples/jsm/nodes/Nodes.js');
mongoose.connect('mongodb://localhost:27017/thewincolumn')
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.error('Could not connect to MongoDB',err));

const newSchema = new mongoose.Schema({
    email: {
      type:String,
      required:true,
    },
    password: {
      type:String,
      required:true,
    }
  });

const collection = mongoose.model("collection", newSchema);

module.exports = collection;