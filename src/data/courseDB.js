import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  url: String,
});

const Course = mongoose.model('courses', courseSchema);

export default Course;