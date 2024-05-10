import axios from "axios";
import { ITodo } from "../components/MyTodo/TodoHome";

const base_url = "https://localhost:7094/Todo";

export const todoApi = {
  getTodos: () => axios.get<ITodo[]>(base_url),
  addTodo: (todo: ITodo) => axios.post(base_url, todo),
  updateTodo: (id: string, todo: ITodo) => axios.put(base_url + `/${id}`, todo),
  deleteTodo: (id: string) => axios.delete<ITodo>(base_url + `/${id}`),
  getTodo: (id: string) => axios.get<ITodo>(base_url + `/${id}`),
  //completedTodo: (id: string, isDone: Boolean) => axios.put(base_url + `/${id}`, isDone)
};
