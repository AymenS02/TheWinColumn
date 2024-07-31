import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import loginDB from './src/data/loginDB.js';
import courseEnrolledDB from './src/data/coursesEnrolledDB.js';

const app = express();

mongoose.connect("mongodb+srv://aymenshoteri:Anev3682013.@thewincolumn.0inb4jw.mongodb.net/")
  .then(() => {
    console.log("mongodb users connected");
  })
  .catch(() => {
    console.log('failed');
  });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

// Test Route
app.get("/", cors(), (req, res) => {
    res.send("Server is running");
});

// User Routes
app.post("/signin", async (req, res) => {
    const { email } = req.body;

    try {
        const check = await loginDB.findOne({ email: email });

        if (check) {
            res.json({ msg: "User already exists", firstName: check.firstName});
        } else {
            res.json({ msg: "Does not exist" });
        }

    } catch (e) {
        res.json({ msg: "Fail" });
    }
});

app.post('/register', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const data = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        admin: false,
    };

    try {
        const existingUser = await loginDB.findOne({ email: email });
    
        if (existingUser) {
          return res.status(400).json({ msg: "User already exists" });
        } else {
          await loginDB.create(data);
          return res.json("User registered successfully");
        }
      } catch (e) {
        return res.status(500).json({ msg: "Internal server error" });
      }
});

// ----------------------------

// Course Routes
app.post("/courses", async (req, res) => {
    const { email, courses } = req.body;

    const data = {
        email: email,
        courses: Array.from(courses),
    };

});
// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
