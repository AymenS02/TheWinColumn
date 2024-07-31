import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  courses: {
    type: Array,
    required: true
  }
});

const courseEnrolledDB = mongoose.model("courseEnrolled", newSchema);

export default courseEnrolledDB;