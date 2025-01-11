import { model, Schema } from "mongoose";

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Todo = model("Todo", TodoSchema);

export default Todo;
