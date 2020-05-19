import React from "react"

import LogoLoader from "../../assets/icons/logoLoader.inline.svg"

import { OuterContainer, LoaderContainer, Logo } from "./loader.styles"

const Loader = () => (
  <OuterContainer>
    <LoaderContainer>
      <Logo>
        <LogoLoader />
      </Logo>
    </LoaderContainer>
  </OuterContainer>
)

export default Loader
