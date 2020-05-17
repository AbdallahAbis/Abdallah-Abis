import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import Burger from "@animated-burgers/burger-slip"

export const BurgerMenu = styled(Burger)`
  display: none;
  @media ${device.tabPort} {
    display: block;
    z-index: 100;
  }
`
