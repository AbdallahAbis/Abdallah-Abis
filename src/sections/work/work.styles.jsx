import styled from "styled-components"
import Img from "gatsby-image"
import device from "../../globalStyles/media-queries"

import CustomButton from "../../components/customButton/customButton.component"

import GithubSVG from "../../assets/icons/github.inline.svg"
import NewSVG from "../../assets/icons/new-window.inline.svg"

export const WorkContainer = styled.div`
  margin-bottom: 15rem;
  padding: 0 20rem;

  @media ${device.tabLand} {
    padding: 10rem;
  }

  @media ${device.tabPort} {
    padding: 0;
  }
`
export const CardContainer = styled.div`
  position: relative;

  overflow: hidden;

  width: 80%;
  height: 45rem;

  border: 3px solid var(--color-quaternary);
  border-radius: 5px;

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
    &:hover {
      #mask {
        clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
        transform: translateX(60%);
      }

      #icons {
        transition: all 0.2s;
      }
      #title {
        transform: translateX(150%);
        transition: all 0.2s;
      }
      #paragraph {
        transform: translate(150%, -50%);
        transition: all 0.2s;
      }
      #tech {
        transform: translateX(250%);
        transition: all 0.2s;
      }
      #button {
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

export const Image = styled(Img)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100%;
  height: auto;
`

export const Mask = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transition: all 0.2s;

  background: rgba(10, 25, 47, 0.95);
`
export const IconsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 1.5rem;

  display: flex;
  flex-direction: column;

  height: 10rem;

  transition: all 0.2s 0.2s;
  transform: translateY(-50%);

  align-items: center;
  justify-content: space-between;

  @media ${device.tabLand} {
    top: 1.5rem;
    left: 3.5rem;

    flex-direction: row;

    width: 7rem;
    height: auto;

    transform: none;
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
  font-weight: 400;

  position: absolute;
  top: 3.5rem;
  right: 5.5rem;

  transition: all 0.2s 0.2s;

  color: var(--color-primary);

  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: -10px;

    width: 10px;
    height: 10px;

    transform: translate(-100%, -50%);

    background: var(--color-secondary);
  }

  @media ${device.phone} {
    top: 1.5rem;
    right: 3.5rem;
  }
`

export const Paragraph = styled.div`
  font-size: 1.6rem;
  line-height: 30px;

  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;

  width: 70%;

  transition: all 0.2s;
  transform: translate(-50%, -50%);

  color: var(--color-primary);

  @media ${device.phone} {
    font-size: 2rem;

    top: 40%;

    width: 90%;
  }
`
export const TechnologiesContainer = styled.div`
  font-size: 1.3rem;

  position: absolute;
  bottom: 3.5rem;
  left: 5.5rem;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;

  width: 60%;

  transition: all 0.2s;

  color: var(--color-primary);

  & > * {
    &:not(:last-child) {
      margin-right: 5rem;
      margin-bottom: 1rem;
    }
  }

  @media ${device.phone} {
    font-size: 1.8rem;

    bottom: 10.5rem;
    left: 3.5rem;

    width: 90%;
  }
`

export const Technology = styled.p`
  position: relative;

  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 0;

    width: 0.5rem;
    height: 0.5rem;

    transform: translate(-1rem, -50%);

    background: var(--color-secondary);
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
