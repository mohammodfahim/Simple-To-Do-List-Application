import axios from "axios";

const baseURL = "http://localhost:5050";

export const createTodo = async (data) => {
  return await axios.post(`${baseURL}/api/v1/todos/create`, data);
};

export const getAllTodos = async () => {
  return await axios.get(`${baseURL}/api/v1/todos/`);
};

export const updateTodo = (id, todo) => {
  return axios.put(`${baseURL}/api/v1/todos/update/${id}`, todo);
};

export const deleteTodo = (id) => {
  return axios.delete(`${baseURL}/api/v1/todos/delete/${id}`);
};
