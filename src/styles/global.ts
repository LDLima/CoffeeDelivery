import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;
        --moz-osx-font-smoothing: grayscale;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['purple-300']};
    }

    body {
        padding: 2rem 10rem;
        background-color: ${(props) => props.theme.white};
    }

 
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;   
    }

    a {
        text-decoration: none;
    }
`
