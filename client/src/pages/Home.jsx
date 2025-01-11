/* eslint-disable react-hooks/exhaustive-deps */
import { IoIosAddCircle } from "react-icons/io";
import AddTodo from "../components/AddTodo";
import { MdDelete, MdEdit } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { createTodo, deleteTodo, updateTodo } from "../api/Api";
import { AuthContext } from "../context/authContext";

const Home = () => {
  // const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const {
    todos,
    visible,
    setVisible,
    title,
    setTitle,
    description,
    setDescription,
    fetchAllTodos,
  } = useContext(AuthContext);

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateTodo(editingId, { title, description });
    } else {
      await createTodo({ title, description });
    }
    setTitle("");
    setDescription("");
    setEditingId(null);
    setVisible(!visible);
    fetchAllTodos();
  };

  const handleEdit = (todo) => {
    setVisible(true);
    setTitle(todo.title);
    setDescription(todo.description);
    setEditingId(todo._id);
  };

  // Delete Todo
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      fetchAllTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <AddTodo handleSubmit={handleSubmit} editingId={editingId} />

      <div>
        <button
          onClick={() => setVisible(!visible)}
          className="fixed bottom-10 right-10 flex justify-center gap-2 items-center border border-gray-400 rounded-lg px-4 py-2 text-[18px] bg-slate-500 text-white shadow-2xl shadow-[#dfeaff]"
        >
          <IoIosAddCircle size={"24px"} />
        </button>
      </div>

      <ul className="flex flex-wrap gap-3">
        {todos.data?.map((todo) => (
          <li
            key={todo._id}
            className="bg-slate-400 duration-500 rounded-lg px-5 py-4 w-[32%] hover:-translate-y-2 hover:-translate-x-1 cursor-pointer hover:shadow-xl hover:shadow-[#cdc7ff] hover:text-[#323232]"
          >
            <div>
              <div>
                <h2 className="text-xl text-white font-bold capitalize border-b border-[#00000078] pb-1 mb-4">
                  {todo.title}
                </h2>
              </div>
              <p className="text-sm capitalize text-white">
                {todo.description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-7">
              <button
                onClick={() => handleEdit(todo)}
                className="flex items-center justify-center gap-2 rounded-md px-3 py-2 bg-white hover:bg-slate-900 hover:text-white"
              >
                Edit <MdEdit />
              </button>
              <button
                onClick={() => handleDelete(todo._id)}
                className="flex items-center justify-center gap-2 rounded-md px-3 py-2 bg-white hover:bg-slate-900 hover:text-white"
              >
                Delete <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
