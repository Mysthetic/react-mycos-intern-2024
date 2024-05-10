import React, { useState, useEffect, useCallback } from "react";
import { Dialog, DialogTitle, DialogContent, Grid, TextField, DialogActions, Button, IconButton } from "@mui/material";
import { todoApi } from "../../api/TodoApi";
import "../Styles/EditTask.css"
import CancelIcon from '@mui/icons-material/Cancel';
import { IAddTodo } from "./IAddTodo";
import { useForm } from "react-hook-form";
import { ITodo } from "./TodoHome";
import { useParams, useNavigate } from "react-router-dom";

const TodoForm = ({
    open,
    onClose,
    onSuccess,
    data
}: {
    open: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    data?: ITodo;
}) => {
    const [todoName, setTodoName] = useState("");
    const [todoDetail, setTodoDetail] = useState("");
    const [todoDueDate, setTodoDueDate] = useState('');
    const { id } = useParams();
    const [todo, setTodo] = useState<ITodo | undefined>();
    const navigate = useNavigate();

    const onSave = async () => {
        if (data) {
            await todoApi.updateTodo(data?.id!, {
                ...data,
                description: todoDetail,
                title: todoName,
                dueDate: todoDueDate || undefined,
            });
        }
        onSuccess?.();
        onClose();
    };

    const onDelete = async () => {
        if (data) {
            await todoApi.deleteTodo(data?.id!);
            onSuccess?.();
        }
        onClose();
    }


    const loadTodo = useCallback(async (id: string) => {
        const res = await todoApi.getTodo(id);
        setTodo(res.data);
        setTodoName(res.data.title ?? "");
        setTodoDetail("");
    }, []);

    useEffect(() => {
        if (open) {
            if (data) {
                setTodoName(data.title);
                setTodoDetail(data.description ? data.description : "");
            }

        }
    }, [data]);

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
        <Dialog id="editdialog" open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: 10 } }}>
            <form onSubmit={onSubmit}>
                <div id="editbody">
                    <DialogTitle id="topic">Edit task</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={1} direction={"column"}>
                            <Grid item id="edittt">
                                <TextField
                                    error={!!errors?.title}
                                    id="titlenew"
                                    label="Title"
                                    variant="outlined"
                                    value={todoName}
                                    autoComplete="off"
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
                            <Grid item id="editdes">
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
                            <Grid item id="editdate">
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
                            <Grid item id="edittime">
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
                            <button id="deltask" onClick={onDelete}>
                                Delete
                            </button>
                            <button id="editup" onClick={onSave}>
                                Done
                            </button>
                            <IconButton id="canceledit" aria-label="edit" onClick={onClose}>
                                <CancelIcon sx={{ color: '#8E77B5', fontSize: '50px' }} />
                            </IconButton>
                        </DialogActions>
                    </div>
                </div>
            </form>
        </Dialog>
    );
};

export default TodoForm;