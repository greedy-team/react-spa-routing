import { createContext, useState } from 'react';
import { lightTheme, darkTheme } from '../theme/theme';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('theme', 'dark');
  }

  const initTheme =
    localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(initTheme ? initTheme : null);

  const toggleDarkmode = () => {
    const saveTheme = theme === lightTheme ? darkTheme : lightTheme;

    setTheme(saveTheme);

    localStorage.setItem('theme', saveTheme === lightTheme ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkmode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
