import { createGlobalStyle } from "styled-components"
import device from "./media-queries"

import Fonts from "../fonts/fonts"
import "./design-variables.css"

export const GlobalStyles = createGlobalStyle`
${Fonts}

*, *::after, *::before{
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html{
  font-size: 62.5%;

  box-sizing: border-box;

  scroll-behavior: smooth;

  @media ${device.laptop} {
    font-size: 52.5%;  
  }

  @media ${device.phone} {
    font-size: 42.5%;  
  }
}

body {
  font-family: var(--font-primary);
  font-weight: 400;

  position: relative;

  max-width: 1680px;
  padding: 0 10rem;

  background: var(--color-tertiary);

  overflow: ${({ isOpen }) => (isOpen ? "hidden" : "scroll")};
  overflow-x: hidden;
  
  @media ${device.phone} {
    padding: 0 3rem;
  }
}
    

a {
  cursor: pointer;
  text-decoration: none;

  color: currentColor;
}
`
