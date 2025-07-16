import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import useThemeStore from "./stores/themeStore.js";
import { lightTheme, darkTheme, GlobalStyle } from "./App.styled.js";

function Root() {
  const { theme } = useThemeStore();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <StrictMode>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
