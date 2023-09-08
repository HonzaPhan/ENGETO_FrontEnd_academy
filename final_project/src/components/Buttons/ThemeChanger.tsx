import { DarkMode, LightMode } from "@mui/icons-material";
import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { useStyles } from "./ThemeChangerStyles";

interface ThemeChangerProps {
  setMode: (theme: string) => void;
}

const ThemeChanger = ({ setMode }: ThemeChangerProps) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const themeResponsive = useStyles;

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setMode(newTheme);
  };

  return (
    <Switch
      icon={<DarkMode />}
      checked={theme === "light"}
      checkedIcon={<LightMode />}
      onChange={toggleTheme}
      color="default"
      className={themeResponsive}
    />
  );
};

export default ThemeChanger;
