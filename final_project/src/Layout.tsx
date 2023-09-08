import FullScreenModal from "./components/Modals/Modal";
import Navbar from "./components/Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import { LightTheme, DarkTheme } from "../src/themes/Theme";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import ThemeChanger from "./components/Buttons/ThemeChanger";

const Layout = (): JSX.Element => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <FullScreenModal />
      <CssBaseline />
      <Navbar />
      <ThemeChanger setMode={setTheme}/>
    </ThemeProvider>
  );
};

export default Layout;
