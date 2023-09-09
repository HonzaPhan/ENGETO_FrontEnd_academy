import FullScreenModal from "./components/Modals/Modal";
import Navbar from "./components/Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import { LightTheme, DarkTheme } from "../src/themes/Theme";
import { ThemeProvider } from "@emotion/react";
import { useRef, useState } from "react";
import ThemeChanger from "./components/Buttons/ThemeChanger";
import ListOfImages from "./components/Sections/Characters/ImageList";
import ScrollUp from "./components/Buttons/ScrollUp";
import IntroArticle from "./components/Sections/Introduction/IntroArticle";
import StoryArticle from "./components/Sections/Story/StoryArticle";
import YTVideoPlayer from "./components/Sections/Trailer/YTVideoPlayer";

const Layout = (): JSX.Element => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <FullScreenModal />
      <CssBaseline />
      <ScrollUp window={window} onClick={scrollToTop} />
      
      {/*Page layout*/}
      <Navbar />
      <IntroArticle />
      <ListOfImages />
      <StoryArticle />
      <YTVideoPlayer />

      <ThemeChanger setMode={setTheme} />
    </ThemeProvider>
  );
};

export default Layout;
