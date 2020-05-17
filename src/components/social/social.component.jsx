import React from "react"

import Github from "../../assets/icons/github.inline.svg"
import LinkedIn from "../../assets/icons/linkedin.inline.svg"
import CodePen from "../../assets/icons/codepen.inline.svg"
import Twitter from "../../assets/icons/twitter.inline.svg"
import Instagram from "../../assets/icons/instagram.inline.svg"

import { SocialContainer, Icon } from "./social.styles"

const Social = () => (
  <SocialContainer>
    <Icon href="https://github.com/AbdallahAbis" target="_blank">
      <Github />
    </Icon>
    <Icon href="https://www.linkedin.com/in/abdallah-abis/" target="_blank">
      <LinkedIn />
    </Icon>
    <Icon href="https://codepen.io/abdallah-abis" target="_blank">
      <CodePen />
    </Icon>
    <Icon href="https://twitter.com/Dev_abis" target="_blank">
      <Twitter />
    </Icon>
    <Icon href="http://instagram.com/Abis_Abdallah" target="_blank">
      <Instagram />
    </Icon>
  </SocialContainer>
)

export default Social
