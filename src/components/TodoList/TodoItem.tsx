import React, { useCallback, useEffect, useState } from "react";
import { ITodo } from "../MyTodo/TodoHome";
import { Button, Checkbox, FormControlLabel, Grid, IconButton } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import { Link, useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CreateIcon from '@mui/icons-material/Create';
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "../Styles/TodoHome.css";
import Editbtn from "../MyTodo/Editbtn";

interface ITodoItemProps {
  todoItem: ITodo;
}

const TodoItem = ({
  props,
  onEdit,
  dataToEdit,
  onCheck
}: {
  props: ITodo;
  onEdit: () => void;
  dataToEdit: (innerTodo: ITodo) => void;
  onCheck: () => void;
}) => {
  const todoItem = { ...props };
  const [innerTodo, setInnerTodo] = useState<ITodo>(todoItem);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = async () => {
    try {
      await todoApi.updateTodo(innerTodo.id!,
        {
          ...innerTodo,
          status: isChecked ? "Undone" : "Done"
        }
      );
      setIsChecked(!isChecked); 
      onCheck();
    } catch {
      throw new Error("Update status fail");
    }
  };

  useEffect(() => {
    setIsChecked(props.status === "Done" ? true : false)
  }, [])

  // todo task box
  return (
    <>
      <Grid container>
        <Grid id="todolist" item md={12} xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid id="blankbtn">
            <IconButton id="blankbox" aria-label="uncompl" onClick={handleCheckboxClick}>
              {isChecked ? (
                <CheckBoxIcon id="check" aria-label="compl" sx={{ color: '#A3E7CB', fontSize: '50px' }} />
              ) : (
                <CheckBoxOutlineBlankIcon sx={{ fontSize: '50px' }} />
              )}
            </IconButton>
          </Grid>
          <div className="EditTaskBox">
            <Editbtn onSuccess={() => {
              onEdit();
              dataToEdit(innerTodo);
            }} />
          </div>
          <div id="todo-text">
            <p id="due">Due at : {innerTodo.dueDate}</p>
            <p id='name' style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
              {innerTodo.title}
            </p>
            <p id="desc">Description : {innerTodo.description}</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default TodoItem;