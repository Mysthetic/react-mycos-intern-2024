import React, { useCallback, useEffect, useState } from "react";
import TodoItemComp from "../TodoList/TodoItemComp";
import { Box, Button, Grid, IconButton, ListItemIcon, Typography } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import Addtodo from "../MyTodo/Addtodo";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "../Styles/Completed.css";
import Addbtn from "./Addbtn";

export interface ITodo {
    id?: string;
    title: string;
    isDone: boolean;
    description?: string;
    // createDate: string;
    // updateDate: string;
    dueDate?: string | null;
}

const ListContainer = () => {

    //use for keep the vairable value
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [openAddToDoDialog, setOpenAddToDoDialog] = useState(false);
    const [openEditTodo, setOpenEditTodo] = useState(false);
    const [dataEdit, setDataEdit] = useState<ITodo>();
    const getTodos = useCallback(async () => {
        const result = await todoApi.getTodos();
        setTodos(result.data);
    }, []);
    const navigate = useNavigate();

    useEffect(() => {
        getTodos();
    }, [getTodos]);


    function handleSuccess(): void {
        setOpenAddToDoDialog(true)
    }

    //overview of home
    return (
        <>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <div id="nav-todo">
                        <h1 id="webname">RemindMe</h1>
                    </div>
                </Grid>
                <Grid item md={2} xs={1}>
                    <Grid id="body">
                        <Grid id="side-tab">
                            <Grid id="btm-nav" md={12} xs={12}>
                                <li id="li1">
                                    <IconButton id="todohome" aria-label="home" onClick={() => navigate('/', {replace: true})}>
                                        <HomeIcon sx={{ color: '#F5F5F5', fontSize: '70px' }} />
                                    </IconButton>
                                </li>
                                <div className="AddTaskBox">
                                    <Addbtn onSuccess={handleSuccess} />
                                </div>
                                <li id="li2">
                                    <IconButton id="completed" aria-label="completed">
                                        <CheckBoxIcon sx={{ color: '#8E77B5', fontSize: '70px' }} />
                                    </IconButton>
                                </li>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={9} md={11} xs={11}>
                    <Grid id="bodycomplt" xl={9} md={10} xs={11}>
                        <h1 id="title">Completed Task</h1>
                        <Grid container>
                            <div id="scroll">
                                {todos.map((t) => {
                                    return (
                                        <Grid key={"todo-" + t.title} item pl={2} >
                                            {/* <TodoItemComp todoItem={t} /> */}
                                        </Grid>
                                    );
                                })}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Addtodo
                open={openAddToDoDialog}
                onClose={() => setOpenAddToDoDialog(false)}
                onSuccess={getTodos}
            />
        </>
    );
};

export default ListContainer;
