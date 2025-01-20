import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body[data-theme='light'] {
        background-color: ${({ theme }) => theme.color.WHITE};
        color: ${({ theme }) => theme.color.BLACK};
    }

    body[data-theme='dark'] {
        background-color: ${({ theme }) => theme.color.DARK};
        color: ${({ theme }) => theme.color.WHITE};
    }
    
    body {
        font-family: sans-serif;
        font-size: 16px;
        transition: background-color 0.3s, color 0.3s;
    }
`;

export default GlobalStyle;
