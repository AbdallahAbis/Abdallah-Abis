import React from "react"

import Title from "../../components/title/title.component"
import CustomButton from "../../components/customButton/customButton.component"

import {
  ExperimentsContainer,
  Experiments,
  Experiment,
  CodePen,
  ExperimentTitle,
  Image,
} from "./experiments.styles"

const ExperimentsSection = ({ ExperimentsData }) => (
  <ExperimentsContainer
  id='experiments'
    data-sal="slide-up"
    data-sal-duration="1000"
    data-sal-easing="easeOutQuart"
  >
    <Title>Experiments.</Title>

    <Experiments>
      {ExperimentsData.map(
        (
          {
            node: {
              frontmatter: {
                title,
                link,
                image: { publicURL },
              },
            },
          },
          i
        ) => (
          <Experiment key={i}>
            <a
              aria-label={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodePen />
            </a>
            <Image img={publicURL} />
            <ExperimentTitle>{title}</ExperimentTitle>
          </Experiment>
        )
      )}
    </Experiments>
    {ExperimentsData.length > 4 && <CustomButton>See More</CustomButton>}
  </ExperimentsContainer>
)

export default ExperimentsSection
