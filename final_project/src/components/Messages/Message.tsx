import { useState, useEffect } from "react";
import { Stack, Snackbar, Slide, Alert } from "@mui/material";

interface MessageProps {
  message: string;
  severity: "success" | "error";
  open: boolean;
  handleClose: () => void;
}

const Message = ({ message, severity, open, handleClose }: MessageProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
        handleClose();
      }, 3500);
    }
  }, [isVisible, handleClose]);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isVisible}
        autoHideDuration={null}
        onClose={handleClose}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Message;
