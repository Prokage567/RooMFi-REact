import { Button, Box, Modal } from "@mui/material";
export default function CustomModal({open,handleOpen, buttonText, handleClose}) {

    return (
        <>
            <Button
                variant="contained"
                color="success"
                sx={{ mb: "2" }}
                onClick={handleOpen}
            >
                {buttonText}
            </Button>
            <Modal 
            open={open}
            onClose={handleClose}
            >
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    mr: "auto",
                    ml: "auto",                    
                    mt: 10
                }}>

                </Box>
            </Modal>
        </>
    )
}