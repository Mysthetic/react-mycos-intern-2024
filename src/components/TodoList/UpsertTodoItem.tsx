import { Button, Grid, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { todoApi } from "../../api/TodoApi";
import { ITodo } from "../MyTodo/TodoHome";

const UpsertTodoItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ITodo | undefined>();
  const [todoName, setTodoName] = useState("");
  const [todoDetail, setTodoDetail] = useState("");
  const [todoCreate, setTodoCreate] = useState("");
  const [todoUpdate, setTodoUpdate] = useState("");
  const [todoDue, setTodoDue] = useState("");
  //const [todoTag, setTodoTag] = useState("");
  const onSave = async () => {
    if (!todo?.id && !todo) {
      await todoApi.addTodo({
        title: todoName,
        // isDone: false,
        description: todoDetail,
        // createDate: todoCreate,
        // updateDate: todoUpdate,
        dueDate: todoDue,
        // tags: todoTag,
      });
    } else {
      await todoApi.updateTodo(todo.id!, {
        ...todo,
        description: todoDetail,
        title: todoName,
      });
    }
    navigate("/todos");
  };
  const loadTodo = useCallback(async (id: string) => {
    const res = await todoApi.getTodo(id);
    setTodo(res.data);
    setTodoName(res.data.title ?? "");
    setTodoDetail("");
  }, []);

  useEffect(() => {
    if (id) {
      loadTodo(id);
    }
  }, [id, loadTodo]);

// add new task popup
  return (
    <div id = "addTask">
      <Grid container spacing={1} direction={"column"}>
        <title>Add new task</title>
        <Grid item>
          <TextField
            label="Title"
            variant="outlined"
            value={todoName}
            onChange={(e) => {
              setTodoName(e.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Description"
            variant="outlined"
            value={todoDetail}
            onChange={(e) => {
              setTodoDetail(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent={"end"} pt={3}>
        <Grid item>
          <Button id="add" onClick={onSave}>Done</Button>
        </Grid>
        <Grid item>
          <Button id="cancel" onClick={() => navigate("/todos")} color="secondary">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpsertTodoItem;
