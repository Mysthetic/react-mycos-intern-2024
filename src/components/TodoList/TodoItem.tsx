import React, { useCallback, useState } from "react";
import { ITodo } from "../MyTodo/TodoHome";
import { Button, Checkbox, FormControlLabel, Grid, IconButton } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import { Link, useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import "../Styles/TodoHome.css";
import Editbtn from "../MyTodo/Editbtn";

interface ITodoItemProps {
  todoItem: ITodo;
}
// const TodoItem = (props: ITodoItemProps) => {
//   const { todoItem } = props;
//   const [innerTodo, setInnerTodo] = useState<ITodo>(todoItem);
//   const navigate = useNavigate();

  const TodoItem = ({
    props,
    onEdit,
    dataToEdit
  }: {
    props:ITodo;
    onEdit: () => void;
    dataToEdit: (innerTodo: ITodo) => void;
  }) => {
    const todoItem = {...props};
    const [innerTodo, setInnerTodo] = useState<ITodo>(todoItem);
    const navigate = useNavigate();

  function editBtn(): void {
    onEdit();
    throw new Error("Function not implemented.");
  }

  // todo task box
  return (
    <>
      <Grid container>
        <Grid id="todolist" item md={12} xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid id="blankbtn">
            <IconButton id="blankbox" aria-label="uncompl">
              <CheckBoxOutlineBlankIcon sx={{ fontSize: '50px' }} />
            </IconButton>
          </Grid>
          {/* <Grid id="editbtn">
            <IconButton id="edit-btn" aria-label="edit">
              <CreateIcon sx={{ fontSize: '40px' }} />
            </IconButton>
          </Grid> */}
          <div className="EditTaskBox">
            <Editbtn onSuccess={() => {
              onEdit();
              dataToEdit(innerTodo);
            }} />
          </div>
          <div id="todo-text">
            <p id="due">Due at : {innerTodo.dueDate}</p>
            <p id='name'>{innerTodo.title}</p>
            <p id="desc">Description : {innerTodo.description}</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TodoItem;
