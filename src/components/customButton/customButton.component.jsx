import React from "react"

import { Button } from "./customButton.styles"

const CustomButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

export default CustomButton
