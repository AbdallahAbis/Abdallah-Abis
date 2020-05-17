import styled from "styled-components"
import LogoSVG from "../../assets/icons/logo.inline.svg"

export const LogoIcon = styled(LogoSVG)`
  height: 3.5rem;
  width: 3.5rem;
  cursor: pointer;
  transition: all 0.5s;

  fill: var(--color-secondary);

  &:hover {
    fill: var(--color-primary);
  }
`
