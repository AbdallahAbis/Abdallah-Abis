import React, { useState } from "react"

import MenuContext from "../../contexts/hamburgerMenu.context"

import Logo from "../logo/logo.component"
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu.component"

import { HeaderContainer, OptionsContainer, Option } from "./header.styles"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MenuContext.Provider value={isOpen}>
      <HeaderContainer>
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
