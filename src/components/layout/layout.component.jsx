import React from "react"

import { GlobalStyles } from "../../globalStyles/globalStyles"
import Header from "../header/header.component"
import Email from "../email/email.component"
import Social from "../social/social.component"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Email />
      <Social />
    </>
  )
}

export default Layout
