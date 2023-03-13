import { createGlobalStyle } from "styled-components";

export const colors = {
  darkGunmetal: "#24232C",
  romanSilver: "#817D92",
  platinum: "#E6E5EA",
  eerieBlack: "#18171F",
  mintGreen: "#A4FFAF",
  tartOrange: "#F64A4A",
  coral: "#FB7C58",
  crayola: "#F8CD65",
};

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'JetBrainsMono';
        src: local('JetBrainsMono'), url('assets/fonts/JetBrainsMono-Bold.ttf') format('truetype');
    }

    *,
    *:after,
    *::before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    p {
      margin: 0;
    }

    body {
        margin: 0;
        padding:0;
        font-family: JetBrainsMono;
        background-color: ${colors.eerieBlack};
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    button {
      font-family: JetBrainsMono;
    }
`;

export const theme = {
  colors: {
    ...colors,
  },
};
