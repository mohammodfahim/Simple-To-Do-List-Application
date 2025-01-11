import Todo from "../models/TodoSchema.js";

export const createTodo = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;

    const todo = new Todo({
      title,
      description,
      completed
    });
    await todo.save();

    if (!title || !description) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    if (title.length < 3 || title.length > 80) {
      return res
        .status(400)
        .json({ message: "Title must be between 3 and 80 characters" });
    }

    return res.status(201).json({
      message: "Todo created successfully",
      data: todo,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find()

    if (!todos.length) {
      return res.status(404).json({ message: "No todos found" });
    }

    return res.status(200).json({ data: todos });
  } catch (err) {
    next(err);
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        description,
        completed,
      },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo updated", data: todo });
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    next(err);
  }
};
