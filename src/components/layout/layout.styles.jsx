import styled from "styled-components"
import device from "../../globalStyles/media-queries"
import { rollInBottom } from "../../utils/animations"

import Social from "../social/social.component"

export const SocialMedia = styled(Social)`
  position: fixed;
  right: 5rem;
  bottom: 20%;

  animation: ${rollInBottom} 0.5s ease-in 3s both;

  &::after {
    content: "";

    position: absolute;
    bottom: -30rem;
    left: 50%;

    width: 0.5px;
    height: 30rem;

    transition: all 0.5s;
    transform: translate(-50%);
    pointer-events: none;

    background: var(--color-secondary);
  }

  @media ${device.tabPort} {
    display: none;
  }
`
