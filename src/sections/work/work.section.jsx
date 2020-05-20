import React from "react"
import PropTypes from "prop-types"

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
  Image,
  // Button,
} from "./work.styles"

const WorkSection = ({ WorkData }) => {
  return (
    <WorkContainer id="work">
      <Title
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="easeOutQuart"
      >
        Latest Works.
      </Title>
      {WorkData.map(
        (
          {
            node: {
              frontmatter: {
                title,
                github,
                external,
                technologies,
                image: {
                  childImageSharp: { fluid },
                },
              },
              html,
            },
          },
          i
        ) => (
          <CardContainer
            key={i}
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-easing="easeOutQuart"
          >
            <Mask id="mask" className="mask" />
            <Image id="img" fluid={fluid} />
            <IconsContainer id="icons">
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
                href={external}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewWindow />
              </a>
            </IconsContainer>
            <WorkTitle id="title">{title}</WorkTitle>
            <Paragraph
              id="paragraph"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <TechnologiesContainer id="tech">
              {technologies.map((tech, i) => (
                <Technology key={i}>{tech}</Technology>
              ))}
            </TechnologiesContainer>

            {/* <Button>Show Case »</Button> */}
          </CardContainer>
        )
      )}
    </WorkContainer>
  )
}

WorkSection.propTypes = {
  WorkData: PropTypes.array.isRequired,
}

export default WorkSection
