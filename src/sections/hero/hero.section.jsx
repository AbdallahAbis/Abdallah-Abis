import React from "react"

import {
  HeroContainer,
  TitleContainer,
  Title,
  Slogan,
  Paragraph,
  Button,
  Email,
} from "./hero.styles"

const HeroSection = () => (
  <HeroContainer>
    <TitleContainer>
      <Title>Abdallah Abis.</Title>
      <Slogan>Front-end web developer, and web designer!</Slogan>
    </TitleContainer>
    <Paragraph>
      I bring ideas to life by helping entrepreneurs build their brand and
      launch their startups to be present online. I’m currently freelancing full
      time.
    </Paragraph>
    <Button>Let's Talk</Button>
    <Email href="mailto:abis.abdallah@gmail.com">Abis.Abdallah@gmail.com</Email>
  </HeroContainer>
)

export default HeroSection
