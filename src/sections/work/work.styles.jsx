import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import CustomButton from "../../components/customButton/customButton.component"

import bg from "../../assets/images/bg.png"
import GithubSVG from "../../assets/icons/github.inline.svg"
import NewSVG from "../../assets/icons/new-window.inline.svg"

export const WorkContainer = styled.div`
  padding: 0 20rem;
  margin-bottom: 15rem;

  @media ${device.tabLand} {
    padding: 10rem;
  }
  @media ${device.tabPort} {
    padding: 0;
  }
`
export const CardContainer = styled.div`
  width: 80%;
  height: 45rem;
  background: url(${bg});
  background-size: cover;
  border: 3px solid var(--color-quaternary);
  border-radius: 5px;
  overflow: hidden;

  position: relative;

  &:first-of-type {
    margin-top: 10rem;
  }

  &:nth-child(odd) {
    margin-left: auto;
  }

  &:not(:last-child) {
    margin-bottom: 7rem;
  }

  @media (pointer: fine) {
    &:hover > * {
      &:nth-child(1) {
        clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
        transform: translateX(60%);
      }
      &:nth-child(2) {
        transform: translateX(-200%);
        transition: all 0.2s;
      }
      &:nth-child(3) {
        transform: translateX(150%);
        transition: all 0.2s;
      }
      &:nth-child(4) {
        transform: translate(150%, -50%);
        transition: all 0.2s;
      }
      &:nth-child(5) {
        transform: translateX(250%);
        transition: all 0.2s;
      }
      &:nth-child(6) {
        transform: translateY(0);
        transition: all 0.2s 0.2s;
      }
    }
  }

  @media ${device.tabLand} {
    width: 100%;
  }
  @media ${device.phone} {
    height: 65rem;
  }
`

export const Mask = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(10, 25, 47, 0.95);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  transition: all 0.2s;
`
export const IconsContainer = styled.div`
  width: 7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 3.5rem;
  left: 5.5rem;
  transition: all 0.2s 0.2s;

  @media ${device.phone} {
    top: 1.5rem;
    left: 3.5rem;
  }
`

export const Github = styled(GithubSVG)`
  height: 2.5rem;
  fill: var(--color-primary);
`
export const NewWindow = styled(NewSVG)`
  height: 2.5rem;
  fill: var(--color-primary);
`
export const WorkTitle = styled.h3`
  font-family: var(--font-secondary);
  font-size: 2rem;
  color: var(--color-primary);

  position: absolute;
  top: 3.5rem;
  right: 5.5rem;

  transition: all 0.2s 0.2s;

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    background: var(--color-secondary);

    position: absolute;
    top: 50%;
    left: -10px;
    transform: translate(-100%, -50%);
  }

  @media ${device.phone} {
    top: 1.5rem;
    right: 3.5rem;
  }
`

export const Paragraph = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 1.6rem;
  line-height: 30px;
  color: var(--color-primary);
  width: 70%;

  transition: all 0.2s;

  @media ${device.phone} {
    width: 90%;
    top: 40%;
    font-size: 1.8rem;
  }
`
export const TechnologiesContainer = styled.div`
  position: absolute;
  bottom: 3.5rem;
  left: 5.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, max-content));
  grid-gap: 2rem;
  width: 70%;
  font-size: 1.3rem;
  color: var(--color-primary);

  transition: all 0.2s;

  @media ${device.phone} {
    bottom: 10.5rem;
    left: 3.5rem;
    font-size: 1.6rem;
    width: 90%;
  }
`

export const Technology = styled.p`
  position: relative;
  &:before {
    content: "";
    height: 0.5rem;
    width: 0.5rem;
    background: var(--color-secondary);

    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-1rem, -50%);
  }
`
export const Button = styled(CustomButton)`
  position: absolute;
  right: 2.5rem;
  bottom: 1.7rem;

  transform: translateY(200%);

  @media ${device.tabLand} {
    transform: none;
  }
`
