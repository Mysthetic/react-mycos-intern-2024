import React, { useCallback, useEffect, useState } from "react";
import TodoItem from "../TodoList/TodoItem";
import { Box, Button, Grid, IconButton, ListItemIcon, Typography } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import AddTodoDialog from "../TodoList/NewTodoDialog";
import { useNavigate } from "react-router-dom";
//import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "../Styles/TodoHome.css";
import Addbtn from "./Addbtn";
//import { ROUTES } from "../../App";
export interface ITodo {
    id?: string;
    title: string;
    // isDone: boolean;
    description?: string;
    // createDate: string;
    // updateDate: string;
    dueDate?: string;
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


    function handleSuccess(): void {
        throw new Error("Function not implemented.");
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
                                    <IconButton id="todohome" aria-label="home">
                                        <HomeIcon sx={{ color: '#8E77B5', fontSize: '70px' }} />
                                    </IconButton>
                                </li>
                                {/* <li id="li3"> */}
                                    <div className="AddTaskBox">
                                        <Addbtn onSuccess={handleSuccess} />
                                    </div>
                                {/* </li> */}
                                <li id="li2">
                                    <IconButton id="completed" aria-label="completed">
                                        <CheckBoxIcon sx={{ color: '#F5F5F5', fontSize: '70px' }} />
                                    </IconButton>
                                </li>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={9} md={11} xs={11}>
                    <Grid id="bodytodo" xl={9} md={10} xs={11}>
                        <h1>To-do List</h1>
                        <Grid container>
                            <div id="scroll">
                                {todos.map((t) => {
                                    return (
                                        <Grid key={"todo-" + t.title} item pl={2} >
                                            <TodoItem todoItem={t} key={t.id} />
                                        </Grid>
                                    );
                                })}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>




            {/* <Box px={4}> */}
            {/* <Grid container justifyContent={"space-between"} spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Typography variant="h4">To-do List</Typography>
                    </Grid>
                </Grid> */}

            {/* </Box> */}
            <AddTodoDialog
                open={openAddToDoDialog}
                onClose={() => setOpenAddToDoDialog(false)}
                onSuccess={getTodos}
            />
        </>
    );
};

export default ListContainer;
