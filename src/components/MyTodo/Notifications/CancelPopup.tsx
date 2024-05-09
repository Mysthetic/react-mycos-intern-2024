

return (
    <Dialog id="ccdialog" open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: 10 } }}>
        <div id="cancelnoti">
            <DialogTitle id="notitopic">Do you want to cacel it?</DialogTitle>
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
