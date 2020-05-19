import React, { useState, useEffect } from "react"

import MenuContext from "../../contexts/hamburgerMenu.context"

import Logo from "../logo/logo.component"
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu.component"

import { HeaderContainer, OptionsContainer, Option } from "./header.styles"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [className, setClassName] = useState("")
  useEffect(() => {
    let lastScroll = 0
    const scrollCallBack = window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset

      currentScroll > lastScroll
        ? setClassName("hide")
        : currentScroll < lastScroll && currentScroll > 50
        ? setClassName("show")
        : setClassName("")

      lastScroll = currentScroll

      return () => {
        window.removeEventListener("scroll", scrollCallBack)
      }
    })
  }, [])
  return (
    <MenuContext.Provider value={isOpen}>
      <HeaderContainer className={className}>
        <Logo />
        <OptionsContainer className={isOpen}>
          <Option>Blog.</Option>
          <Option>About.</Option>
          <Option>Work.</Option>
          <Option>Experiments.</Option>
          <Option>Contact.</Option>
        </OptionsContainer>
        <HamburgerMenu setIsOpen={setIsOpen} />
      </HeaderContainer>
    </MenuContext.Provider>
  )
}

export default Header
