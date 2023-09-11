import { KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  Modal,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

const FullScreenModal = (): JSX.Element => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(false);

  useEffect(() => {
    const hasModalBeenShownBefore = localStorage.getItem("hasModalBeenShown");
    if (!hasModalBeenShownBefore) {
      setOpen(true);
      localStorage.setItem("hasModalBeenShown", "true");
    }
  }, []);

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
            alignItems: isSmallScreen ? "center" : "end",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            backgroundImage: isSmallScreen
              ? `url("https://images.squarespace-cdn.com/content/51b3dc8ee4b051b96ceb10de/1683325674536-UV4DVR77YH46NDXQ7KMM/bleach-tybw-1.jpg?format=1500w&content-type=image%2Fjpeg")`
              : `url("https://a.storyblok.com/f/178900/1200x675/fca4fc5359/bleach-thousand-year-blood-war-part-2-titelbild.jpeg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            gap: "2rem",
            transition: "opacity 1s ease, transform 1s ease",
            transform: close ? "translateX(-100%)" : "translateX(0)",
            opacity: close ? 0 : 1,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant={isSmallScreen ? "h4" : "h1"}
            component={isSmallScreen ? "h4" : "h1"}
            sx={{
              color: isSmallScreen ? "white" : "black",
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: isSmallScreen ? "0.5rem" : "2rem",
            }}
          >
            BLEACH
          </Typography>
          <Button
            endIcon={<KeyboardDoubleArrowRightOutlined />}
            onClick={handleClose}
            size="large"
            sx={{
              mr: isSmallScreen ? "0" : "11rem",
              color: isSmallScreen ? "white" : "black",
            }}
          >
            Explore more
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default FullScreenModal;
