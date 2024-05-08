import { Grid, IconButton } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { useState } from "react";
import Edittodo from "./Edittodo";

const EditTodoBtn = ({
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
            <Grid id="editbtn">
                <IconButton id="edit-btn" aria-label="edit" onClick={onSuccess}>
                    <CreateIcon sx={{ fontSize: '40px' }} />
                </IconButton>
            </Grid>
            <Edittodo open={openForm} onClose={handleCloseForm} onSuccess={onSuccess} />

        </>
    );
};
export default EditTodoBtn;
