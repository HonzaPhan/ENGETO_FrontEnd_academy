import { Stack, Snackbar, Slide, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";

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

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isVisible}
        autoHideDuration={3000}
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
