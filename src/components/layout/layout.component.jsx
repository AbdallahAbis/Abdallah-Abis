import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import sal from "sal.js"
import "sal.js/dist/sal.css"

import Head from "../../utils/head"
import MenuContext from "../../contexts/hamburgerMenu.context"

import { GlobalStyles } from "../../globalStyles/globalStyles"

import Header from "../header/header.component"
import Email from "../email/email.component"
import Footer from "../footer/footer.component"

import { SocialMedia } from "./layout.styles"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [count, setCount] = useState(1000)

  React.useEffect(() => {
    sal()
  })

  setTimeout(function () {
    setCount(0)
  }, 2000)
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <Head metadata={site.siteMetadata} />
          <MenuContext.Provider value={isOpen}>
            <GlobalStyles isOpen={isOpen} />
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            {children}
            <Email />
            <SocialMedia />
            <Footer />
          </MenuContext.Provider>
        </div>
      )}
    />
  )
}

export default Layout
