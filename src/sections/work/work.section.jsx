import React from "react"

import Title from "../../components/title/title.component"

import {
  WorkContainer,
  CardContainer,
  IconsContainer,
  Mask,
  Github,
  NewWindow,
  WorkTitle,
  Paragraph,
  TechnologiesContainer,
  Technology,
  Button,
} from "./work.styles"

const WorkSection = () => (
  <WorkContainer
    data-sal="slide-up"
    data-sal-duration="1000"
    data-sal-easing="easeOutQuart"
  >
    <Title>Latest Works.</Title>
    <CardContainer
      data-sal="slide-right"
      data-sal-duration="1000"
      data-sal-easing="easeOutQuart"
    >
      <Mask className="mask" />
      <IconsContainer>
        <a href="">
          <Github />
        </a>
        <a href="">
          <NewWindow />
        </a>
      </IconsContainer>
      <WorkTitle>Wear And Smile</WorkTitle>
      <Paragraph>
        Wear and Shop is my first website built using Reactjs and it's an
        imaginary eCommerce website that was designed and developed by me. I
        tried to implement most of the necessary things on an eCommerce website.
      </Paragraph>
      <TechnologiesContainer>
        <Technology>React.js</Technology>
        <Technology>Redux.js</Technology>
        <Technology>Redux-saga</Technology>
        <Technology>Firebase</Technology>
      </TechnologiesContainer>

      <Button>Show Case »</Button>
    </CardContainer>
  </WorkContainer>
)

export default WorkSection
