import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import Burger from "@animated-burgers/burger-slip"

import { rollInRight } from "../../utils/animations"

export const BurgerMenu = styled(Burger)`
  display: none;
  @media ${device.tabPort} {
    display: block;
    z-index: 100;

    .burger-lines {
      &,
      &:before,
      &:after {
        background: var(--color-secondary);
      }
    }

    // Animation
    animation: ${rollInRight} 2s ease-out 0.4s both;
  }
`
