import React, { useState } from "react"
import sal from "sal.js"
import "sal.js/dist/sal.css"

import MenuContext from "../../contexts/hamburgerMenu.context"

import { GlobalStyles } from "../../globalStyles/globalStyles"

import Loader from "../loader/loader.component"
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
    <MenuContext.Provider value={isOpen}>
      <>
        <GlobalStyles isOpen={isOpen} />
        {count !== 0 ? (
          <Loader />
        ) : (
          <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            {children}
            <Email />
            <SocialMedia />
            <Footer />
          </>
        )}
      </>
    </MenuContext.Provider>
  )
}

export default Layout
