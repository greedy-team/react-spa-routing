import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bodyBg: "#f0f2f5",
  textColor: "#333",
  cardBg: "#fff",
  cardBorder: "#e0e0e0",
  cardTitleColor: "#333",
  cardDescriptionColor: "#666",
  gnbBg: "#e9ecef",
  gnbLinkColor: "#333",
  gnbLinkActive: "#007bff",
  buttonBg: "#007bff",
  buttonText: "#ffffff",
};

export const darkTheme = {
  bodyBg: "#333",
  textColor: "#f0f2f5",
  cardBg: "#444",
  cardBorder: "#555",
  cardTitleColor: "#ffffff",
  cardDescriptionColor: "#e0e0e0",
  gnbBg: "#222",
  gnbLinkColor: "#f0f2f5",
  gnbLinkActive: "#90CAF9",
  buttonBg: "#90CAF9",
  buttonText: "#333333",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.bodyBg};
    color: ${(props) => props.theme.textColor};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
