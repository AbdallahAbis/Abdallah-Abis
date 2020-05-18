import styled, { keyframes } from "styled-components"
import LogoSVG from "../../assets/icons/logo.inline.svg"

const rollInLeft = keyframes`
 00% {
    transform: translateX(-300px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  38% {
    transform: rotate(-360deg);
    opacity: 1;
  }
  100% {
   transform: rotate(0);
    opacity: 1;
  }
`

export const LogoIcon = styled(LogoSVG)`
         height: 3.5rem;
         width: 3.5rem;
         cursor: pointer;
         transition: all 0.5s;

         fill: var(--color-secondary);

         &:hover {
           fill: var(--color-primary);
         }

         // Animation
         animation: ${rollInLeft} 2s ease-out 0.4s both;
       `
