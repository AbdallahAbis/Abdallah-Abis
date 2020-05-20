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
import EXPERIMENT_DATA from "./data"

const ExperimentsSection = () => (
  <ExperimentsContainer
    data-sal="slide-up"
    data-sal-duration="1000"
    data-sal-easing="easeOutQuart"
  >
    <Title>Experiments.</Title>

    <Experiments>
      {EXPERIMENT_DATA.map(({ title, imgUrl, link }, i) => (
        <Experiment key={i}>
          <a
            aria-label={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodePen />
          </a>
          <Image img={imgUrl} />
          <ExperimentTitle>{title}</ExperimentTitle>
        </Experiment>
      ))}
    </Experiments>
    {EXPERIMENT_DATA.length > 4 && <CustomButton>See More</CustomButton>}
  </ExperimentsContainer>
)

export default ExperimentsSection
