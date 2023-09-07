import { KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";
import { Box, Button, Typography, Modal } from "@mui/material";
import { useState } from "react";

const FullScreenModal = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true);
  const [close, setClose] = useState<boolean>(false);

  const handleClose = (): void => {
    {
      setClose(true);

      setTimeout(() => {
        setOpen(false);
      }, 750);
    }
  };

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="modal-box"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            backgroundImage: `url("https://cdn.pixabay.com/photo/2016/11/21/12/39/stars-1845140_1280.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "black",
            gap: "2rem",
            transition: "opacity 1s ease, transform 1s ease",
            transform: close ? "translateX(-100%)" : "translateX(0)",
            opacity: close ? 0 : 1,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h1"
            component="h1"
            sx={{ color: "white", textAlign: "center", fontWeight: "bold"}}
          >
            Welcome to my final project!
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="h5"
            component="p"
            sx={{ mt: 2, color: "white", fontWeight: "bold"}}
          >
            Are you ready to explore my page?
          </Typography>
          <Button
            variant="outlined"
            endIcon={<KeyboardDoubleArrowRightOutlined />}
            onClick={handleClose}
            size="large"
          >
            Explore more
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default FullScreenModal;
