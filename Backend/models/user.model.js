import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  resumes: [String],
});

const User = model("User", userSchema);

export { User };