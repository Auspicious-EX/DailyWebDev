import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: String,
    des : String,
    inDone : Boolean,
    days : Number
  });

export const Todo = mongoose.model('Todo', TodoSchema);