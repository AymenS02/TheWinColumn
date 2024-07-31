import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true
  }
});

const usersLogin = mongoose.model("users", newSchema);

export default usersLogin;
