import React from "react"
import PropTypes from "prop-types"

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

Loader.propTypes = {
  loaded: PropTypes.bool.isRequired,
}

export default Loader
