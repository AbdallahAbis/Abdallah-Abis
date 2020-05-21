import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import { rollInBottom } from "../../utils/animations"

export const EmailContainer = styled.div`
  position: fixed;
  bottom: 20%;
  left: 5rem;

  display: flex;

  width: 3rem;

  animation: ${rollInBottom} 0.5s ease-in 3s both;

  justify-content: center;

  @media ${device.tabPort} {
    display: none;
  }
`
export const EmailAddress = styled.a`
  font-family: var(--font-secondary);
  font-size: 1.3rem;

  position: relative;

  transition: all 0.5s;
  transform: scale(-1, -1);
  letter-spacing: 3px;

  color: var(--color-primary);

  writing-mode: vertical-rl;

  &::after {
    position: absolute;
    top: -33rem;
    left: 50%;

    width: 0.5px;
    height: 30rem;

    content: "";
    transition: all 0.5s;
    transform: translate(-50%);
    pointer-events: none;

    background: var(--color-secondary);
  }

  &:hover {
    color: var(--color-secondary);

    &::after {
      background: var(--color-primary);
    }
  }
`
