import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import { rollInLeft, flickerIn } from "../../utils/animations"

import CustomButton from "../../components/customButton/customButton.component"

export const HeroContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  height: 100vh;
  padding: 23rem 0 0 20rem;

  color: var(--color-primary);

  justify-content: start;
  align-items: flex-start;

  @media ${device.laptop} {
    padding-top: 15rem;
  }

  @media ${device.tabLand} {
    height: 100vh;
    padding-top: 20rem;
    padding-left: 10rem;
  }

  @media ${device.tabPort} {
    height: 100vh;
    padding: 0;

    justify-content: center;
  }
`
export const TitleContainer = styled.div`
  margin-bottom: 10rem;

  @media ${device.laptop} {
    margin-bottom: 7rem;
  }
`
export const Title = styled.h1`
  font-size: 9rem;
  font-weight: bold;

  animation: ${flickerIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1.5s both;

  @media ${device.phone} {
    font-size: 7rem;
  }
  @media ${device.smallPhone} {
    font-size: 5.5rem;
  }
`
export const Slogan = styled.h2`
  font-family: var(--font-secondary);
  font-size: 2.4rem;
  font-weight: 400;

  color: var(--color-secondary);

  animation: ${flickerIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1.5s both;

  @media ${device.phone} {
    font-size: 2rem;
  }
  @media ${device.smallPhone} {
    font-size: 1.5rem;
  }
`
export const Paragraph = styled.div`
  font-size: 1.8rem;
  line-height: 30px;

  width: 50%;
  margin-bottom: 14rem;

  transition-delay: 2.2s;

  @media ${device.laptop} {
    font-size: 1.6rem;

    width: 45%;
    margin-bottom: 10rem;
  }

  @media ${device.tabLand} {
    width: 60%;
  }

  @media ${device.tabPort} {
    width: 80%;
  }

  @media ${device.phone} {
    font-size: 2rem;

    width: 95%;
  }

  @media ${device.smallPhone} {
    font-size: 1.8rem;
  }
`
export const Button = styled(CustomButton)`
  transition-delay: 2.5s;

  @media ${device.phone} {
    margin-bottom: 10rem;
  }
`
export const Email = styled.a`
  font-family: var(--font-secondary);
  font-size: 1.3rem;

  position: absolute;
  bottom: 5%;

  padding-left: 18rem;

  color: var(--color-secondary);
  background: transparent;

  animation: ${rollInLeft} 0.5s ease-out 2.5s both;

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: 0;

    width: 15rem;
    height: 1px;

    pointer-events: none;

    background: var(--color-primary);
  }

  @media ${device.tabLand} {
    bottom: 10%;
  }

  @media ${device.phone} {
    font-size: 1.7rem;

    bottom: 8%;
  }

  @media ${device.smallPhone} {
    bottom: 5%;
  }
`
