import { model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required!'],
      trim: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: [true, 'Email is required!'],
      unique: true,
      lowercase: true,
      trim: true,
      max: 50,
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      trim: true,
      min: 5,
    },
    city: {
      type: String,
      trim: true,
      min: 5,
    },
    state: {
      type: String,
      trim: true,
      min: 5,
    },
    country: {
      type: String,
      trim: true,
      min: 5,
    },
    occupation: {
      type: String,
      trim: true,
      min: 5,
    },
    phoneNumber: {
      type: String,
      trim: true,
      min: 5,
    },
    transactions: {
      type: Array,
    },
    role: {
      type: String,
      trim: true,
      required: true,
      enum: ['user', 'admin', 'superadmin'],
      default: 'user', // <- google sign up / social sign up
    },
  },
  { timestamps: true, versionKey: false }
);

UserSchema.methods.toJSON = function () {
  const user = this.toObject();

  user.uid = user._id;
  delete user.password;
  delete user.state;
  delete user._id;

  return user;
};

export default model('User', UserSchema);
