import React from "react"
import { Link } from "gatsby"

import { LogoIcon } from "./logo.styles"

const Logo = () => (
  <Link aria-label="Abis's Logo" to="/">
    <LogoIcon />
  </Link>
)

export default Logo
