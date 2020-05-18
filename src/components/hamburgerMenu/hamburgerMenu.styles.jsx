import styled, { keyframes } from "styled-components"
import device from "../../globalStyles/media-queries"

import Burger from "@animated-burgers/burger-slip"

const rollInRight = keyframes`
0% {
    transform: translateX(300px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(-20px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(10px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(5px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
`

export const BurgerMenu = styled(Burger)`
  display: none;
  @media ${device.tabPort} {
    display: block;
    z-index: 100;

    // Animation
    animation: ${rollInRight} 2s ease-out 0.4s both;
  }
`
