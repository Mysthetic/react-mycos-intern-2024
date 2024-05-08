import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, Grid, TextField, DialogActions, Button, IconButton } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import "../Styles/EditTask.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { IAddTodo } from "./IAddTodo";
import { useForm } from "react-hook-form";

const TodoForm = ({
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
    const [todoDueDate, setTodoDueDate] = useState('');

    const onSave = async () => {
        try {
            if (todoName) {
                await todoApi.addTodo({
                    title: todoName,
                    description: todoDetail,
                    dueDate: todoDueDate,
                    // isDone: false,
                    // createDate: "",
                    // updateDate: ""
                });
                onSuccess?.();
                onClose();
            }
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    useEffect(() => {
        if (open) {
            setTodoName("");
            setTodoDetail("");
        }
    }, [open]);

    const newTodo = async (data: IAddTodo) => {
        return await new Promise(resolve => setTimeout(resolve, 3000))
    }

    const onFormValid = async (data: IAddTodo) => {
        await newTodo(data)
        console.log("Send to API success", data)
    }

    const onFormInValid = (err: any) => {
        console.log("Form err: ", err)
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<IAddTodo>({
        defaultValues: {
            title: "",
            description: "",
        }
    })

    const onSubmit = handleSubmit(onFormValid, onFormInValid)

    return (
        <Dialog id="adddialog" open={open} onClose={onClose} PaperProps={{ sx: {borderRadius: 10}}}>             
            <form onSubmit={onSubmit}>
                    <div id="addbody">
                        <DialogTitle id="topic">Edit task</DialogTitle>
                        <DialogContent>
                            <Grid container spacing={1} direction={"column"}>
                                <Grid item id="addtt">
                                    <TextField
                                        error={!!errors?.title}
                                        id="titlenew"
                                        label="Title"
                                        variant="outlined"
                                        value={todoName}
                                        autoComplete="off"
                                        {...register("title", { required: true })}
                                        helperText={errors?.title ? "Title is required" : ""}
                                        InputProps={{
                                            style: {
                                                fontSize: 20,
                                                borderRadius: "1rem",
                                                fontFamily: "Poppins",
                                            },
                                        }}
                                        onChange={(e) => {
                                            setTodoName(e.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item id="adddes">
                                    <TextField
                                        id="descrip"
                                        label="Description"
                                        variant="outlined"
                                        value={todoDetail}
                                        autoComplete="off"
                                        onChange={(e) => {
                                            setTodoDetail(e.target.value);
                                        }}
                                        InputProps={{
                                            style: {
                                                fontSize: 20,
                                                borderRadius: "1rem",
                                                fontFamily: "Poppins",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item id="adddate">
                                    <TextField
                                        id="duedate"
                                        label=""
                                        type="date"
                                        variant="outlined"
                                        autoComplete="off"
                                        value={todoDueDate}
                                        onChange={(e) => {
                                            setTodoDueDate(e.target.value);
                                        }}
                                        InputProps={{
                                            style: {
                                                fontSize: 20,
                                                borderRadius: "1rem",
                                                fontFamily: "Poppins",
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item id="addtime">
                                    <TextField
                                        id="duetime"
                                        label=""
                                        type="time"
                                        variant="outlined"
                                        autoComplete="off"
                                        value={todoDueDate}
                                        onChange={(e) => {
                                            setTodoDueDate(e.target.value);
                                        }}
                                        InputProps={{
                                            style: {
                                                fontSize: 20,
                                                borderRadius: "1rem",
                                                fontFamily: "Poppins",
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <div id="btn">
                            <DialogActions>
                                <IconButton id="addnew" aria-label="add" onClick={onSave} disabled={isSubmitting} type="submit">
                                    <CheckCircleIcon sx={{ color: '#505C86', fontSize: '100px' }} />
                                </IconButton>
                                <IconButton id="canceladd" aria-label="add" onClick={onClose}>
                                    <CancelIcon sx={{ color: '#E48080', fontSize: '40px' }} />
                                </IconButton>
                            </DialogActions>
                        </div>
                    </div>
                </form>
        </Dialog>
    );
};

export default TodoForm;

