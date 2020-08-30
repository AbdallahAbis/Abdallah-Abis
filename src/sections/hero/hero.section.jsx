import React from "react"
import PropTypes from "prop-types"
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
    <HeroContainer id='home'>
      <TitleContainer>
        <Title>{name}</Title>
        <Slogan>{slogan}</Slogan>
      </TitleContainer>
      <Paragraph
        dangerouslySetInnerHTML={{ __html: html }}
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease-out-back"
      />
      <Button
        as='a'
        href="/#about"
        aria-label="check my skills"
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

HeroSection.propTypes = {
  HeroData: PropTypes.array.isRequired,
}

export default HeroSection
