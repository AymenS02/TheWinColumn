const express = require('express');
const collection = require('./src/mongo');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.get("/", cors(), (req, res) => {
    res.send("Server is running");
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const data = {
        email: email,
        password: password
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            return res.status(400).json({ msg: "User already exists" });
        } else {
            await collection.insertMany([data]);  
            return res.json("User registered successfully");
        }
    } catch (e) {
        return res.status(500).json({ msg: "Internal server error" });
    }
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
