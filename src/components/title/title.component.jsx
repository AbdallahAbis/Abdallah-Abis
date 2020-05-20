import React from "react"
import PropTypes from "prop-types"

import { StyledTitle } from "./title.styles"

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>

Title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title
