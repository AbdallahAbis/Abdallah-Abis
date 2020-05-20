import React from "react"
import PropTypes from "prop-types"

import { Button } from "./customButton.styles"

const CustomButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
}
export default CustomButton
