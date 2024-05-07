import React, { useCallback, useState } from "react";
import { ITodo } from "./ListContainer";
import { Button, Checkbox, FormControlLabel, Grid, IconButton } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import { Link, useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import "../Styles/TodoHome.css";
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
          <Grid id="blankbtn">
            <IconButton id="blankbox" aria-label="uncompl">
              <CheckBoxOutlineBlankIcon sx={{ fontSize: '50px' }} />
            </IconButton>
          </Grid>
          <Grid id="editbtn">
            <IconButton id="edit-btn" aria-label="edit">
              <CreateIcon sx={{ fontSize: '40px' }} />
            </IconButton>
          </Grid>
          <div id="todo-text">
            <p id="due">Due at : {innerTodo.dueDate}</p>
            <p id='name'>{innerTodo.title}</p>
            <p id="desc">Description : {innerTodo.description}</p>
          </div>
        </Grid>
      </Grid>
      {/* <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => {
              onChange(e.target.checked);
            }}
            checked={innerTodo.isDone}
          />
        }
        label={innerTodo.title}
      />
      <Button onClick={() => navigate("/todos/" + todoItem.id)}>Open</Button>
      <Link to={"/todos/" + todoItem.id}>Open</Link> */}
      {/* <div id="todo-box"> */}
      {/* </div> */}
    </>
  );
};

export default TodoItem;
