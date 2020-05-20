import React from "react"

import { OuterContainer, LoaderContainer, Logo } from "./loader.styles"
import LogoLoader from "../../assets/icons/logoLoader.inline.svg"

const Loader = ({ loaded }) => (
  <OuterContainer loaded={loaded}>
    <LoaderContainer>
      <Logo>
        <LogoLoader />
      </Logo>
    </LoaderContainer>
  </OuterContainer>
)

export default Loader
