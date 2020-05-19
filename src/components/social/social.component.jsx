import React from "react"

import { socialMedia } from "../../info"

import Github from "../../assets/icons/github.inline.svg"
import LinkedIn from "../../assets/icons/linkedin.inline.svg"
import CodePen from "../../assets/icons/codepen.inline.svg"
import Twitter from "../../assets/icons/twitter.inline.svg"
import Instagram from "../../assets/icons/instagram.inline.svg"

import { SocialContainer, Icon } from "./social.styles"

const SVG = ({ name }) => {
  return name === "LinkedIn" ? (
    <LinkedIn />
  ) : name === "CodePen" ? (
    <CodePen />
  ) : name === "Twitter" ? (
    <Twitter />
  ) : name === "Instagram" ? (
    <Instagram />
  ) : (
    <Github />
  )
}

const Social = () => (
  <SocialContainer>
    {socialMedia.map(({ name, url, icon }) => (
      <Icon href={url} target="_blank" rel="noopener noreferrer">
        <SVG name={name} />
      </Icon>
    ))}
  </SocialContainer>
)

export default Social
