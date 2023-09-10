import { DarkMode, LightMode } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

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

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setMode(newTheme);
  };

  const isLightTheme = theme === "light";

  return (
    <Button
      sx={{
        position: "fixed",
        left: "1rem",
        bottom: "2rem",
        borderRadius: "15px",
        zIndex: 1
      }}
      onClick={toggleTheme}
    >
      {isLightTheme ? (
        <DarkMode
          sx={{
            width: "20px",
            height: "20px",
          }}
        />
      ) : (
        <LightMode
          sx={{
            width: "20px",
            height: "20px",
          }}
        />
      )}
    </Button>
  );
};

export default ThemeChanger;
