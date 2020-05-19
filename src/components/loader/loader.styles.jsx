import styled, { keyframes } from "styled-components"

const anim = keyframes`
from {
    stroke: transparent;
  }
  to {
    stroke-dashoffset: 0;
    stroke: var(--color-secondary);
  }

`
const moveLeft = keyframes`
50% {
    transform: translateX(-20%);
    opacity: 1;
  }

`
const moveRight = keyframes`
50% {
    transform: translateX(20%);
    opacity: 1;
  }

`

export const OuterContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-tertiary);
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before,
  &:after {
    content: "";
    width: 200%;
    height: 50%;
    position: absolute;
    background: var(--color-secondary);
  }

  &:before {
    top: 0;
    animation: ${moveRight} 1s;
    transform: translateX(-100%);
    opacity: 0;
  }

  &:after {
    bottom: 0;
    animation: ${moveLeft} 1s;
    transform: translateX(100%);
    opacity: 0;
  }
`

export const Logo = styled.div`
  & svg {
    height: 6rem;
    fill: none;

    & > * {
      stroke-width: 15px;
      animation: ${anim} 1s forwards 0.6s;
    }

    path:nth-child(1) {
      stroke-dasharray: 202;
      stroke-dashoffset: 202;
    }
    path:nth-child(2) {
      stroke-dasharray: 461;
      stroke-dashoffset: 461;
    }
    path:nth-child(3) {
      stroke-dasharray: 139;
      stroke-dashoffset: 139;
    }
    path:nth-child(4) {
      stroke-dasharray: 91;
      stroke-dashoffset: 91;
    }
    path:nth-child(5) {
      stroke-dasharray: 807;
      stroke-dashoffset: 807;
    }
  }
`
