import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import CodePenSVG from "../../assets/icons/codepen.inline.svg"

export const ExperimentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 50vh;
  margin-bottom: 15rem;
  padding: 0 20rem;

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
  display: grid;

  width: 100%;
  margin-top: 7rem;
  margin-bottom: 15rem;

  grid-template-columns: repeat(auto-fill, minmax(15rem, 24rem));
  justify-items: center;
  justify-content: center;
  grid-column-gap: 3rem;
  grid-row-gap: 7rem;
`
export const Experiment = styled.div`
  position: relative;

  display: flex;

  width: 100%;
  max-width: 30rem;
  height: 24rem;

  background: var(--color-quaternary);

  justify-content: center;
  align-items: center;
`

export const Image = styled.div`
  width: 90%;
  height: 90%;

  border-radius: 50%;
  background: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
`
export const CodePen = styled(CodePenSVG)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  width: 2.5rem;
  height: 2.5rem;

  fill: var(--color-primary);
`
export const ExperimentTitle = styled.p`
  font-family: var(--font-secondary);
  font-size: 1.3rem;

  position: absolute;
  bottom: -2.5rem;
  left: 0;

  width: 100%;

  color: var(--color-primary);

  @media ${device.phone} {
    font-size: 1.8rem;
    bottom: -3rem;
  }
`
