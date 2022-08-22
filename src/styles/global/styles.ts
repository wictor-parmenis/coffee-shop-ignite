import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    header {
        font-family: 'Baloo 2', cursive;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => props.theme.background};
        -webkit-font-smoothing: antialiased;
        font-size: 10px;
        line-height: 130%;
    }

    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
    
`;
