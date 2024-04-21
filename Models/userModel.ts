import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const hashPassword = (password: string) => {
  //TODO:: Hash password here
  return password;
};

UserSchema.pre('save', function (next) {
  console.log('Saving user...');
  if (!this.isModified('password')) {
    return next();
  }
  console.log('Hashing password...');
  this.password = hashPassword(this.password);
  next();
});

const User = model('User', UserSchema);

export default User;
