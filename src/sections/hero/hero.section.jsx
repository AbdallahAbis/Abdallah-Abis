import React from "react"
import info from "../../info"

import {
  HeroContainer,
  TitleContainer,
  Title,
  Slogan,
  Paragraph,
  Button,
  Email,
} from "./hero.styles"

const HeroSection = ({ HeroData }) => {
  const {
    frontmatter: { name, slogan, buttonText },
    html,
  } = HeroData[0].node
  return (
    <HeroContainer>
      <TitleContainer>
        <Title>{name}</Title>
        <Slogan>{slogan}</Slogan>
      </TitleContainer>
      <Paragraph
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease-out-back"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Button
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease-out-back"
      >
        {buttonText}
      </Button>
      <Email aria-label="mail me" href={`mailto:${info.email}`}>
        {info.email}
      </Email>
    </HeroContainer>
  )
}

export default HeroSection
