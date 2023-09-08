import FullScreenModal from "./components/Modals/Modal";
import Navbar from "./components/Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import { LightTheme, DarkTheme } from "../src/themes/Theme";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import ThemeChanger from "./components/Buttons/ThemeChanger";
import ListOfImages from "./components/Sections/Characters/ImageList";
import Article from "./components/Sections/Introduction/Article";

const Layout = (): JSX.Element => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <FullScreenModal />
      <CssBaseline />
      <Navbar />
      <Article />
      <ListOfImages />
      <ThemeChanger setMode={setTheme}/>
    </ThemeProvider>
  );
};

export default Layout;
