const mongoose = require('./src/data/coursesEnrolled'); // Import the courses database connection

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
