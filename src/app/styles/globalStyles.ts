import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
      background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
   font-family: var(--font-inter), sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
  }
`;

export default GlobalStyles;
