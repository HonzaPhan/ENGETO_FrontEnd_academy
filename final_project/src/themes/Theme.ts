import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
    },
    mode: "dark",
  },
});