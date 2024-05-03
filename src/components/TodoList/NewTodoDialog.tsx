import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { todoApi } from "../../api/TodoApi";

const AddTodoDialog = ({
  open,
  onClose,
  onSuccess,
}: {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}) => {
  const [todoName, setTodoName] = useState("");
  const [todoDetail, setTodoDetail] = useState("");
  const [todoCreate, setTodoCreate] = useState("");
  const [todoUpdate, setTodoUpdate] = useState("");
  const [todoDue, setTodoDue] = useState("");
  const [todoTag, setTodoTag] = useState("");
  const onSave = async () => {
    await todoApi.addTodo({
      title: todoName,
      // isDone: false,
      description: todoDetail,
      createDate: todoCreate,
      updateDate: todoUpdate,
      dueDate: todoDue,
      tags: todoTag,
    });
    onSuccess?.();
    onClose();
  };

  useEffect(() => {
    if (open) {
      setTodoName("");
      setTodoDetail("");
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>TODO</DialogTitle>
      <DialogContent>
        <Grid container spacing={1} direction={"column"}>
          <Grid item>
            <TextField
              label="Name"
              variant="outlined"
              value={todoName}
              onChange={(e) => {
                setTodoName(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Detail"
              variant="outlined"
              value={todoDetail}
              onChange={(e) => {
                setTodoDetail(e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSave}>Save</Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddTodoDialog;
