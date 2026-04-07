import { Schema, model, models } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  institution: string;
  password: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
  },
  institution: {
    type: String,
    required: [true, 'Institution is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Use existing model if it exists, otherwise create new one
const User = models.User || model<IUser>('User', UserSchema);

export default User;