import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, Grid, TextField, DialogActions, Button, IconButton } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import "../Styles/AddTask.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const SelfTodoForm = ({
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
    const [todoDueDate, setTodoDueDate] = useState("");

    const onSave = async () => {
        await todoApi.addTodo({
            title: todoName,
            description: todoDetail,
            dueDate: todoDueDate,
            isDone: false,
            createDate: "",
            updateDate: ""
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
            <DialogTitle id="topic">Add new task</DialogTitle>
            <DialogContent>
                <Grid container spacing={1} direction={"column"}>
                    <Grid item id="titlenew">
                        <TextField
                            label="Title"
                            variant="outlined"
                            value={todoName}
                            autoComplete="off"
                            onChange = {(e) => {
                                setTodoName(e.target.value);
                            }}
                            // {...register("Title", { required: true })}
                            // helperText={Error?.name ? "title is required" :""}
                        />
                    </Grid>
                    <Grid item id="descrip">
                        <TextField
                            label="Description"
                            variant="outlined"
                            value={todoDetail}
                            autoComplete="off"
                            onChange={(e) => {
                                setTodoDetail(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item id="duedate">
                        <TextField
                            label=""
                            type="date"
                            variant="outlined"
                            autoComplete="off"
                            value={todoDueDate}
                            onChange={(e) => {
                                setTodoDueDate(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item id="duetime">
                        <TextField
                            label=""
                            type="time"
                            variant="outlined"
                            autoComplete="off"
                            value={todoDueDate}
                            onChange={(e) => {
                                setTodoDueDate(e.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <IconButton id="addnew" aria-label="add" onClick={onSave}>
                    <CheckCircleIcon sx={{ color: '#505C86', fontSize: '70px' }} />
                </IconButton>
                <IconButton id="canceladd" aria-label="add" onClick={onClose}>
                    <CancelIcon sx={{ color: '#E48080', fontSize: '40px' }} />
                </IconButton>
            </DialogActions>
        </Dialog>
    );
};

export default SelfTodoForm;

function register(arg0: string, arg1: { required: boolean; }): import("react/jsx-runtime").JSX.IntrinsicAttributes & { variant?: import("@mui/material").TextFieldVariants | undefined; } & Omit<import("@mui/material").FilledTextFieldProps | import("@mui/material").OutlinedTextFieldProps | import("@mui/material").StandardTextFieldProps, "variant"> {
    throw new Error("Function not implemented.");
}
