import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  );
};

export default ToggleTheme;
