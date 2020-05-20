import React, { useState, useEffect } from "react"

import { navLinks } from "../../info"

import Logo from "../logo/logo.component"
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu.component"

import { HeaderContainer, OptionsContainer, Option } from "./header.styles"

const Header = ({ isOpen, setIsOpen }) => {
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
    <HeaderContainer className={`${className} ${isOpen}`}>
      <Logo />
      <OptionsContainer className={isOpen}>
        {navLinks.map(({ name, url }, i) => (
          <Option key={i} aria-label={name} href={url}>
            {name}
          </Option>
        ))}
      </OptionsContainer>
      <HamburgerMenu setIsOpen={setIsOpen} />
    </HeaderContainer>
  )
}

export default Header
