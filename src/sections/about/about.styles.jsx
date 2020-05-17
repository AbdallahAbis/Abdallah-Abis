import styled from "styled-components"
import device from "../../globalStyles/media-queries"

export const AboutContainer = styled.div`
  min-height: 100vh;
  padding-left: 23rem;
  padding-right: 5rem;
  color: var(--color-primary);
  display: grid;
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
    padding-left: 0;
    padding-right: 0;
    align-content: center;
    grid-gap: 5rem;
  }
`
export const Title = styled.h2`
  color: var(--color-secondary);
  font-size: 3.2rem;
`
export const Paragraph = styled.p`
  grid-column: 1;
  grid-row: 2;

  font-size: 1.6rem;
  line-height: 30px;

  @media ${device.tabLand} {
    grid-column: 1 / -1;
    width: 70%;
  }

  @media ${device.tabPort} {
    width: 90%;
  }
  @media ${device.phone} {
    width: 100%;
    font-size: 1.8rem;
  }
`
export const SkillsContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  margin-left: 8rem;

  font-family: var(--font-secondary);
  font-size: 1.4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  position: relative;
  &::before {
    content: "";
    height: 90%;
    width: 2px;
    background: var(--color-secondary);

    position: absolute;
    top: 50%;
    left: -4rem;
    transform: translate(-100%, -50%);

    @media ${device.tabLand} {
      height: 70%;
    }
  }

  @media ${device.tabLand} {
    grid-column: 1 / -1;
    grid-row: 3;
    width: 50%;
    margin-left: 4.5rem;

    grid-gap: 2rem;
  }

  @media ${device.tabPort} {
    width: 80%;
  }
  @media ${device.phone} {
    width: 90%;
    font-size: 1.6rem;
  }
`
export const Skill = styled.p`
  position: relative;
  &::before {
    content: "";
    height: 5px;
    width: 5px;
    background: var(--color-secondary);

    position: absolute;
    top: 50%;
    left: -5px;
    transform: translate(-100%, -50%);
  }
`
export const Space = styled.span`
  display: block;
  margin: 3rem 0;

  @media ${device.tabLand} {
    margin: 2rem 0;
  }
`
