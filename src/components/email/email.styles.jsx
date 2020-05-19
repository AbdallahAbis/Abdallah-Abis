import styled, { keyframes } from "styled-components"
import device from "../../globalStyles/media-queries"

import {rollInBottom} from '../../utils/animations'


export const EmailContainer = styled.div`
  position: fixed;
  left: 10rem;
  bottom: 20%;
  width: 3rem;
  display: flex;
  justify-content: center;

  @media ${device.tabPort} {
    display: none;
  }

  animation: ${rollInBottom} .5s ease-in 3s both;
`
export const EmailAddress = styled.a`
  writing-mode: vertical-rl;
  font-family: var(--font-secondary);
  font-size: 1.3rem;
  color: var(--color-primary);
  transform: scale(-1, -1);
  position: relative;
  letter-spacing: 3px;

  transition: all 0.5s;
  &::after {
    content: "";
    width: 0.5px;
    height: 30rem;
    background: var(--color-secondary);
    position: absolute;
    left: 50%;
    top: -33rem;
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
`
