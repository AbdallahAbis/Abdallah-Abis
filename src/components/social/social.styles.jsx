import styled, { keyframes } from "styled-components"
import device from "../../globalStyles/media-queries"

const rollInLeft = keyframes`
 00% {
    transform: translateY(100%);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  
`

export const SocialContainer = styled.div`
  position: fixed;
  bottom: 20%;
  right: 10rem;

  &::after {
    content: "";
    width: 0.5px;
    height: 30rem;
    background: var(--color-secondary);
    position: absolute;
    left: 50%;
    bottom: -30rem;
    transform: translate(-50%);
    transition: all 0.5s;
    pointer-events: none;
  }

  &:hover {
    color: var(--color-secondary);
    &::after {
      background: var(--color-primary);
    }
  }

  @media ${device.tabPort} {
    display: none;
  }

  // Animation

  animation: ${rollInLeft} 0.2s ease-in 3s both;
`
export const Icon = styled.a`
  display: block;
  height: 1.8rem;
  width: 1.8rem;
  fill: var(--color-primary);
  margin-bottom: 3rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    fill: var(--color-secondary);
    transform: scale(1.3);
  }
`
