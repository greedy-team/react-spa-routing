import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    transition: color 500ms;
    transition: background-color 500ms;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 1.5;
    margin: 0 auto;
  }
`;
