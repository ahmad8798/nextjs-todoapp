import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users", // Reference the User model
  },
});

export const Todo = mongoose.models.todos || mongoose.model("todos", todoSchema);
