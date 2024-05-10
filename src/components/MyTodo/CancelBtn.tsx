import { IconButton } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";
import Addtodo from "./Addtodo";

const AddTodoBtn = ({
    open,
    onClose,
    onSuccess,
}: {
    open: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}) => {
    // const [openForm, setOpenForm] = useState(false);

    // const handleOpenForm = () => {
    //     onSuccess?.();
    // };

    // const handleCloseForm = () => {
    //     setOpenForm(false);
    // };
    return (
    <IconButton id="canceladd" aria-label="add" onClick={onClose}>
        <CancelIcon sx={{ color: '#E48080', fontSize: '50px' }} />
    </IconButton>
    )}