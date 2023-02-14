import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.palette.secondary.main};
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.palette.common.white};
  }
`;

export default GlobalStyle;
