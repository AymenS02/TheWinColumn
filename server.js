import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import loginDB from './src/data/loginDB.js';
import courseEnrolledDB from './src/data/courseDB.js';

dotenv.config();

const app = express();

mongoose.connect(`mongodb+srv://aymenshoteri:${process.env.PASSWORD}@thewincolumn.0inb4jw.mongodb.net/`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tlsInsecure: true // For debugging, not recommended for production
})
  .then(() => {
    console.log("mongodb users connected");
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
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
        return res.status(500).json({ msg: "Internal server error 1" });
      }
});

// ----------------------------

// Course Routes
app.post("/enroll", async (req, res) => {
  const { email, courseId } = req.body;

  try {
    const user = await loginDB.findOne({ email: email });
    const course = await courseEnrolledDB.findById(courseId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (!course) {
      return res.status(404).json({ msg: "Course not found" });
    }

    if (!user.enrolledCourses.includes(courseId)) {
      user.enrolledCourses.push(courseId);
      await user.save();
    }

    res.json({ msg: "Enrolled in course successfully" });
  } catch (e) {
    res.status(500).json({ msg: "Internal server error 2" });
  }
});

app.get('/courses', async (req, res) => {
  try {
    const courses = await courseEnrolledDB.find();
    res.json(courses);
  } catch (e) {
    res.status(500).json({ msg: "Internal server error 3" });
  }
});

app.get('/signin', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await courseEnrolledDB.findOne({ email }).populate('enrolledCourses');
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user.enrolledCourses);
  } catch (e) {
    res.status(500).json({ msg: "Internal server error 4" });
  }
});


// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
