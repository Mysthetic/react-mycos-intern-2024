import React, { useCallback, useEffect, useState } from "react";
import TodoItemComp from "../TodoList/TodoItemComp";
import { Box, Button, Grid, IconButton, ListItemIcon, Typography } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import AddTodoDialog from "../TodoList/NewTodoDialog";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "../Styles/Completed.css";
//import { ROUTES } from "../../App";
export interface ITodo {
    id?: string;
    title: string;
    isDone: boolean;
    description?: string;
    createDate: string;
    updateDate: string;
    dueDate: string;
    //tags: any;
}

const ListContainer = () => {

    //use for keep the vairable value
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [openAddToDoDialog, setOpenAddToDoDialog] = useState(false);
    const getTodos = useCallback(async () => {
        const result = await todoApi.getTodos();
        setTodos(result.data);
    }, []);
    const navigate = useNavigate();

    useEffect(() => {
        getTodos();
    }, [getTodos]);


    //overview of home
    return (
        <>
        <Grid container>
                <Grid item md={12} xs={12}>
                    <div id="nav-todo">
                        <h1 id="webname">RemindMe</h1>
                    </div>
                </Grid>
                <Grid item md={2} xs={2}>
                    <Grid id="body">
                        <Grid id="side-tab">
                            <div id="plus"></div>
                            <Grid id="btm-nav" >
                                <li id="li1">
                                    <IconButton id="todohome" aria-label="home">
                                        <HomeIcon sx={{ color: '#F5F5F5', fontSize: '70px' }} />
                                    </IconButton>
                                </li>
                                <li id="li2">
                                    <IconButton id="completed" aria-label="completed">
                                        <CheckBoxIcon sx={{ color: '#8E77B5', fontSize: '70px' }} />
                                    </IconButton>
                                </li>
                                <li id="li3">
                                    <IconButton id="addtodo" aria-label="add">
                                        <AddCircleIcon sx={{ color: '#F5F5F5', fontSize: '70px' }} />
                                    </IconButton>
                                </li>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={10} xs={8}>
                    <Grid id="bodycomplt" md={9} xs={13}>
                        <h1 id="title">Completed Task</h1>
                        <Grid container>
                            <div id="scroll">
                                {todos.map((t) => {
                                    return (
                                        <Grid key={"todo-" + t.title} item pl={2} >
                                            <TodoItemComp todoItem={t} />
                                        </Grid>
                                    );
                                })}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <AddTodoDialog
                open={openAddToDoDialog}
                onClose={() => setOpenAddToDoDialog(false)}
                onSuccess={getTodos}
            />
        </>
    );
};

export default ListContainer;
