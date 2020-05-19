import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import CodePenSVG from "../../assets/icons/codepen.inline.svg"

export const ExperimentsContainer = styled.div`
  min-height: 50vh;
  padding: 0 20rem;
  margin-bottom: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    align-self: flex-start;
  }

  @media ${device.tabLand} {
    padding: 0 10rem;
  }
  @media ${device.tabPort} {
    padding: 0;
  }
`
export const Experiments = styled.div`
  width: 100%;
  margin-top: 7rem;
  margin-bottom: 15rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 24rem));
  justify-items: center;
  justify-content: center;
  grid-column-gap: 3rem;
  grid-row-gap: 7rem;
`
export const Experiment = styled.div`
  height: 24rem;
  width: 100%;
  max-width: 30rem;
  background: var(--color-quaternary);
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.div`
  height: 90%;
  width: 90%;
  border-radius: 50%;
  background: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
`
export const CodePen = styled(CodePenSVG)`
  height: 2.5rem;
  width: 2.5rem;
  fill: var(--color-primary);

  position: absolute;
  top: 1rem;
  right: 1rem;
`
export const ExperimentTitle = styled.p`
  width: 100%;
  font-family: var(--font-secondary);
  font-size: 1.3rem;
  color: var(--color-primary);

  position: absolute;
  left: 0;
  bottom: -2.5rem;
`
