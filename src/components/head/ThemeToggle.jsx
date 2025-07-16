import useThemeStore from "../../store/useThemeStore";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
