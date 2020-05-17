import React, { useContext } from "react"

import MenuContext from "../../contexts/hamburgerMenu.context"

import "@animated-burgers/burger-slip/dist/styles.css"

import { BurgerMenu } from "./hamburgerMenu.styles"

const HamburgerMenu = ({ setIsOpen }) => {
  const isOpen = useContext(MenuContext)

  return <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
}

export default HamburgerMenu
