import styled from "styled-components"
import LogoSVG from "../../assets/icons/logo.inline.svg"

import { rollInLeftAndRotate } from "../../utils/animations"

export const LogoIcon = styled(LogoSVG)`
  width: 3.5rem;
  height: 3.5rem;

  cursor: pointer;
  transition: all 0.5s;
  animation: ${rollInLeftAndRotate} 2s ease-out 0.4s both;

  fill: var(--color-secondary);

  &:hover {
    fill: var(--color-primary);
  }
`
