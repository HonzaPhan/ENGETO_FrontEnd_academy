import { FC } from "react";
import { useScrollTrigger, Box, Fab, Fade } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
  window?: Window;
  onClick: () => void;
}

const ScrollUp: FC<Props> = ({ window, onClick }) => {
  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box
        onClick={onClick}
        role="presentation"
        sx={{ position: "fixed", right: "1rem", bottom: "2rem", zIndex: 1}}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollUp;
