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
  display: flex;

  width: 100%;
  height: 100vh;

  background: var(--color-tertiary);

  align-items: center;
  justify-content: center;

  display: ${({ loaded }) => (loaded ? "none" : "block")};
`
export const LoaderContainer = styled.div`
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  &:before,
  &:after {
    content: "";

    position: absolute;

    width: 200%;
    height: 50%;

    background: var(--color-secondary);
  }

  &:before {
    top: 0;

    transform: translateX(-100%);
    animation: ${moveRight} 1s;

    opacity: 0;
  }

  &:after {
    bottom: 0;

    transform: translateX(100%);
    animation: ${moveLeft} 1s;

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
