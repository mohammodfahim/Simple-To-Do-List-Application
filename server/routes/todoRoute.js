import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todoController.js";

const todoRoutes = express.Router();

todoRoutes.post("/create", createTodo);

todoRoutes.get("/", getAllTodos);

todoRoutes.put("/update/:id", updateTodo);

todoRoutes.delete("/delete/:id", deleteTodo);

export default todoRoutes;
