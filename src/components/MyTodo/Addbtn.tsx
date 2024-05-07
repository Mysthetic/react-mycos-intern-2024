import { IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";
import Addtodo from "./Addtodo";

const AddTodoBtn = ({
    onSuccess,
}: {
    onSuccess?: () => void;
}) => {
    const [openForm, setOpenForm] = useState(false);

    const handleOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    return (
        <>
            <li id="li3" >
                <IconButton id="addtodo" aria-label="add" onClick={handleOpenForm}>
                    <AddCircleIcon sx={{ color: '#E7D9FF', fontSize: '70px' }} />
                </IconButton>
                <Addtodo open={openForm} onClose={handleCloseForm} onSuccess={onSuccess} />
            </li >
        </>
    );
};
export default AddTodoBtn;
