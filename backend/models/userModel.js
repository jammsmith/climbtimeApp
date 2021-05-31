import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false }
});

const User = model('User', userSchema);

export default User;
