import axios from "axios";
import { ITodo } from "../components/TodoList/ListContainer";
const base_url = "https://localhost:7094/Todo";
export const todoApi = {
  getTodos: () => axios.get<ITodo[]>(base_url),
  addTodo: (todo: ITodo) => axios.post(base_url, todo),
  updateTodo: (id: string, todo: ITodo) => axios.put(base_url + `/${id}`, todo),
  getTodo: (id: string) => axios.get<ITodo>(base_url + `/${id}`),
};
