import styled from "styled-components"
import device from "../../globalStyles/media-queries"

export const AboutContainer = styled.div`
  display: grid;

  min-height: 80vh;
  padding-right: 5rem;
  padding-left: 20rem;

  color: var(--color-primary);

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, max-content);
  align-content: center;
  align-items: center;
  grid-gap: 7rem;

  @media ${device.tabLand} {
    margin-top: 10%;
    padding-left: 10rem;

    align-content: start;
  }

  @media ${device.tabPort} {
    margin-top: 0;
    padding-right: 0;
    padding-left: 0;

    align-content: center;
    grid-gap: 5rem;
  }
`
export const Paragraph = styled.div`
  font-size: 1.6rem;
  line-height: 30px;

  grid-column: 1;
  grid-row: 2;

  p:not(:last-child) {
    margin-bottom: 3rem;
  }

  @media ${device.tabLand} {
    width: 70%;

    grid-column: 1 / -1;
  }

  @media ${device.tabPort} {
    font-size: 1.8rem;

    width: 90%;
  }
  @media ${device.phone} {
    width: 100%;

    font-size: 2rem;
  }
`
export const SkillsContainer = styled.div`
  font-family: var(--font-secondary);
  font-size: 1.4rem;

  position: relative;

  display: grid;

  margin-left: 8rem;

  grid-column: 2;
  grid-row: 2;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: -4rem;

    width: 2px;
    height: 90%;

    transform: translate(-100%, -50%);

    background: var(--color-secondary);

    @media ${device.tabLand} {
      height: 70%;
    }
  }

  @media ${device.tabLand} {
    width: 50%;
    margin-left: 4.5rem;

    grid-column: 1 / -1;
    grid-row: 3;
    grid-gap: 2rem;
  }

  @media ${device.tabPort} {
    font-size: 1.6rem;
    width: 80%;
  }
  @media ${device.phone} {
    width: 90%;

    font-size: 1.8rem;
  }
`
export const Skill = styled.p`
  position: relative;

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: -5px;

    width: 5px;
    height: 5px;

    transform: translate(-100%, -50%);

    background: var(--color-secondary);
  }
`
export const Space = styled.span`
  display: block;

  margin: 3rem 0;

  @media ${device.tabLand} {
    margin: 2rem 0;
  }
`
