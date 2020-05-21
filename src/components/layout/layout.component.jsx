import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import sal from "sal.js"
import "sal.js/dist/sal.css"

import Head from "../../utils/head"
import MenuContext from "../../contexts/hamburgerMenu.context"
import ScrollToTop from "../../utils/scrollTop"

import { GlobalStyles } from "../../globalStyles/globalStyles"

import Header from "../header/header.component"
import Email from "../email/email.component"
import Footer from "../footer/footer.component"

import { SocialMedia } from "./layout.styles"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    sal()
    window.scrollTo(0, 0)
  })

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
