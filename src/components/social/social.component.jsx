import React from "react"

import { socialMedia } from "../../info"

import Github from "../../assets/icons/github.inline.svg"
import LinkedIn from "../../assets/icons/linkedin.inline.svg"
import CodePen from "../../assets/icons/codepen.inline.svg"
import Twitter from "../../assets/icons/twitter.inline.svg"
import Instagram from "../../assets/icons/instagram.inline.svg"

import { SocialContainer, Icon } from "./social.styles"

const SVG = ({ name }) => (
  name === "LinkedIn" ? (
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
)

const Social = props => (
  <SocialContainer {...props}>
    {socialMedia.map(({ name, url }, i) => (
      <Icon
        key={i}
        aria-label={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SVG name={name} />
      </Icon>
    ))}
  </SocialContainer>
)

export default Social
