import { createGlobalStyle } from "styled-components"
import device from "./media-queries"

export const GlobalStyles = createGlobalStyle`

*, *::after, *::before{
    padding: 0;
    margin: 0;
    box-sizing: inherit;
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
  background: var(--color-tertiary);
  padding: 0 10rem;
  font-family: var(--font-primary);
  font-weight: 400;
  max-width: 1680px;
  position: relative;
  
    @media ${device.phone} {
      padding: 0 3rem;
    }
}
    

a {
  text-decoration: none;
  color: currentColor;
  cursor: pointer;
}
`
