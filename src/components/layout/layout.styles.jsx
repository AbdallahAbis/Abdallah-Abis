import styled from "styled-components"
import device from "../../globalStyles/media-queries"
import { rollInBottom } from "../../utils/animations"

import Social from "../social/social.component"

export const SocialMedia = styled(Social)`
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

  @media ${device.tabPort} {
    display: none;
  }

  // Animation

  animation: ${rollInBottom} 0.5s ease-in 3s both;
`
