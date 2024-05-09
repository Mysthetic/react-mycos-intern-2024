

return (
    <Dialog id="deldialog" open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: 10 } }}>
        <div id="delnoti">
            <DialogTitle id="notitopic">Are you sure to delete this task?</DialogTitle>
            <div id="noti-btn">
                <DialogActions>
                    <button id="yes">
                        Yes
                    </button>
                    <button id="no" onClick={onSave} disabled={isSubmitting} type="submit">
                        No
                    </button>
                </DialogActions>
            </div>
        </div>
    </Dialog>
);
