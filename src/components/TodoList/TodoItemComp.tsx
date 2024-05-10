import React, { useCallback, useState } from "react";
import { ITodo } from "../MyTodo/TodoHome";
import { Button, Checkbox, FormControlLabel, Grid, IconButton } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import { Link, useNavigate } from "react-router-dom";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import "../Styles/Completed.css";
interface ITodoItemProps {
    todoItem: ITodo;
}
const TodoItem = (props: ITodoItemProps) => {
    const { todoItem } = props;
    const [innerTodo, setInnerTodo] = useState<ITodo>(todoItem);
    // const onChange = useCallback(
    //   async (value: boolean) => {
    //     const newTodo: ITodo = { ...innerTodo, isDone: value };
    //     if (newTodo.id) await todoApi.updateTodo(newTodo.id, newTodo);
    //     setInnerTodo(newTodo);
    //   },
    //   [innerTodo]
    // );
    const navigate = useNavigate();

    // todo task box
    return (
        <>
            <Grid container>
                <Grid id="todolist" item md={10.4} xs={10.7} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid id="compbtn">
                        <IconButton id="check" aria-label="compl">
                            <CheckBoxIcon sx={{ color: '#A3E7CB', fontSize: '50px' }} />
                        </IconButton>
                    </Grid>
                    <Grid id="delbtn">
                        <IconButton id="del-btn" aria-label="delete">
                            <DeleteIcon sx={{ fontSize: '40px' }} />
                        </IconButton>
                    </Grid>
                    <div id="comp-text">
                        <p id='name-comp'>{innerTodo.title}</p>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default TodoItem;
