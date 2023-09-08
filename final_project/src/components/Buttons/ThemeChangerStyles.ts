import { makeStyles } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  switchContainer: {
    width: "62px",
    height: "43px",
    position: "absolute",
    right: "1rem",
    bottom: "1rem",
    
    [theme.breakpoints.up("md")]: {
      right: "3rem",
      bottom: "3rem",
    },
  },
}));
