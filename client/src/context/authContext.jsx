/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getAllTodos } from "../api/Api";

// Create a context
export const AuthContext = createContext();

// Create a context provider component
export const AuthProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState(null);

  const fetchAllTodos = async () => {
    try {
      const response = await getAllTodos();
      setTodos(response.data);
    } catch (err) {
      console.error("[Error:]", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        todos,
        isOpen,
        setIsOpen,
        query,
        setQuery,
        visible,
        setVisible,
        title,
        setTitle,
        description,
        setDescription,
        mode,
        setMode,
        fetchAllTodos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
