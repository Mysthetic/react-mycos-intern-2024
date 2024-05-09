// import React, { useCallback, useEffect, useState } from "react";
// import TodoItem from "./TodoItem";
// import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
// import { todoApi } from "../../api/TodoApi";
// import AddTodoDialog from "./NewTodoDialog";
// import { useNavigate } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import "../Styles/TodoHome.css";

// export interface ITodo {
//   id?: string;
//   title: string;
//   // isDone: boolean;
//   description?: string;
//   // createDate: string;
//   // updateDate: string;
//   dueDate?: string;
//   //tags: any;
// }

// const ListContainer = () => {
//   // let todos: ITodo[] = [];
//   // const todoList = async () => {
//   //   todos = (await todoApi.getTodos()).data;
//   // };
//   // todoList();

//   //use for keep the vairable value
//   const [todos, setTodos] = useState<ITodo[]>([]);
//   const [openAddToDoDialog, setOpenAddToDoDialog] = useState(false);
//   const getTodos = useCallback(async () => {
//     const result = await todoApi.getTodos();
//     setTodos(result.data);
//   }, []);
//   const navigate = useNavigate();
//   // const addItem = useCallback(async () => {
//   //   setOpenAddToDoDialog(true);
//   // }, []);

//   useEffect(() => {
//     getTodos();
//   }, [getTodos]);


//   //overview of home
//   return (
//     <>
//     <Grid id="nav-todo">
//                 RemindMe
//             </Grid>
//             <Grid id="side-tab">
//                 <IconButton id="todohome" aria-label="home">
//                     <HomeIcon sx={{ color: '#8E77B5' }} />
//                 </IconButton>
//                 <IconButton id="completed" aria-label="completed">
//                     <CheckBoxIcon sx={{ color: '#F5F5F5' }} />
//                 </IconButton>
//                 <IconButton id="addtodo" aria-label="add">
//                     <AddCircleIcon sx={{ color: '#F5F5F5' }} />
//                 </IconButton>
//             </Grid>
//             <Grid id="bodytodo">
//                 <h1>To-do List</h1>
//                 <Grid container spacing={1} direction={"column"}>
//                     {todos.map((t) => {
//                         return (
//                             <Grid key={"todo-" + t.title} item pl={2}>
//                                 <TodoItem todoItem={t} />
//                             </Grid>
//                         );
//                     })}
//                 </Grid>
//             </Grid>
//             <AddTodoDialog
//                 open={openAddToDoDialog}
//                 onClose={() => setOpenAddToDoDialog(false)}
//                 onSuccess={getTodos}
//             />
//     </>
//   );
// };

// export default ListContainer;
