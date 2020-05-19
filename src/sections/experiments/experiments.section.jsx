import React from "react"

import Title from "../../components/title/title.component"
import CustomButton from "../../components/customButton/customButton.component"

import {
  ExperimentsContainer,
  Experiments,
  Experiment,
  CodePen,
  ExperimentTitle,
} from "./experiments.styles"

const ExperimentsSection = () => (
  <ExperimentsContainer
    data-sal="slide-up"
    data-sal-duration="1000"
    data-sal-easing="easeOutQuart"
  >
    <Title>Experiments.</Title>

    <Experiments>
      <Experiment>
        <a href="#">
          <CodePen />
        </a>
        <ExperimentTitle>CSS Page Preloader.</ExperimentTitle>
      </Experiment>
    </Experiments>
    <CustomButton>See More</CustomButton>
  </ExperimentsContainer>
)

export default ExperimentsSection
