import FullScreenModal from "./components/Modals/Modal";
import Navbar from "./components/Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import { LightTheme, DarkTheme } from "../src/themes/Theme";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import ThemeChanger from "./components/Buttons/ThemeChanger";
import ListOfImages from "./components/Sections/Characters/ImageList";
import ScrollUp from "./components/Buttons/ScrollUp";
import IntroArticle from "./components/Sections/Introduction/IntroArticle";
import YTVideoPlayer from "./components/Sections/Trailer/YTVideoPlayer";
import Form from "./components/Forms/Form";
import StoryArticle from "./components/Sections/Story/StoryArticle";
import Footer from "./components/Sections/Footer/Footer";

const Layout = (): JSX.Element => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

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
      <Form />
      <Footer />
      <ThemeChanger setMode={setTheme} />
    </ThemeProvider>
  );
};

export default Layout;
