import React from "react"
import WORK_DATA from "./data"

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
  // Button,
} from "./work.styles"

const WorkSection = () => (
  <WorkContainer>
    <Title
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="easeOutQuart"
    >
      Latest Works.
    </Title>
    {WORK_DATA.map(
      ({ title, shortDescription, technologies, github, link, imgUrl }, i) => (
        <CardContainer
          key={i}
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-easing="easeOutQuart"
          img={imgUrl}
        >
          <Mask className="mask" />
          <IconsContainer>
            <a
              aria-label="view on github"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              aria-label="check the demo"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewWindow />
            </a>
          </IconsContainer>
          <WorkTitle>{title}</WorkTitle>
          <Paragraph>{shortDescription}</Paragraph>

          <TechnologiesContainer>
            {technologies.map(tech => (
              <Technology>{tech}</Technology>
            ))}
          </TechnologiesContainer>

          {/* <Button>Show Case »</Button> */}
        </CardContainer>
      )
    )}
  </WorkContainer>
)

export default WorkSection
