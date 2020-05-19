import React from "react"

import Header from "../header/header.component"
import Email from "../email/email.component"
import Social from "../social/social.component"
import Footer from "../footer/footer.component"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Email />
      <Social />
      <Footer />
    </>
  )
}

export default Layout
