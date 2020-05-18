import styled, { keyframes } from "styled-components"
import device from "../../globalStyles/media-queries"

import CustomButton from "../../components/customButton/customButton.component"

const flickerIn = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.1% {
    opacity: 1;
  }
  10.2% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  20.1% {
    opacity: 1;
  }
  20.6% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  30.1% {
    opacity: 1;
  }
  30.5% {
    opacity: 1;
  }
  30.6% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  45.1% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  55.1% {
    opacity: 0;
  }
  57% {
    opacity: 0;
  }
  57.1% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  60.1% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  65.1% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  75.1% {
    opacity: 0;
  }
  77% {
    opacity: 0;
  }
  77.1% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  85.1% {
    opacity: 0;
  }
  86% {
    opacity: 0;
  }
  86.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`

const slideInBtm = keyframes`
  0% {
    transform: translateZ(-1400px) translateY(800px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
`

const rollInLeft = keyframes`
 00% {
    transform: translateX(-300px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  90%{
    transform: translateX(20%);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  
`

export const HeroContainer = styled.div`
  height: 100vh;
  padding: 23rem 0 0 20rem;
  color: var(--color-primary);

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  position: relative;

  @media ${device.laptop} {
    padding-top: 15rem;
  }
  @media ${device.tabLand} {
    padding-top: 20rem;
    padding-left: 10rem;
    height: ${(window.innerHeight * 0.01 * 100) / 2}px;
  }
  @media ${device.tabPort} {
    padding: 0;
    justify-content: center;
    height: ${window.innerHeight * 0.01 * 100}px;
  }
`
export const TitleContainer = styled.div`
  margin-bottom: 10rem;

  @media ${device.laptop} {
    margin-bottom: 7rem;
  }
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: 9rem;

  @media ${device.phone} {
    font-size: 7rem;
  }
  @media ${device.smallPhone} {
    font-size: 5.5rem;
  }

  // Animation
  animation: ${flickerIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1.5s both;
`
export const Slogan = styled.h2`
  color: var(--color-secondary);
  font-family: var(--font-secondary);
  font-size: 2.4rem;

  @media ${device.phone} {
    font-size: 2rem;
  }
  @media ${device.smallPhone} {
    font-size: 1.5rem;
  }

  // Animation
  animation: ${flickerIn} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1.5s both;
`
export const Paragraph = styled.p`
  font-size: 1.8rem;
  width: 50%;
  margin-bottom: 14rem;
  line-height: 30px;

  @media ${device.laptop} {
    margin-bottom: 10rem;
    font-size: 1.6rem;
    width: 45%;
  }

  @media ${device.tabLand} {
    width: 60%;
  }
  @media ${device.tabPort} {
    width: 80%;
  }

  @media ${device.phone} {
    width: 95%;
    font-size: 2rem;
  }

  @media ${device.smallPhone} {
    font-size: 1.8rem;
  }

  // Animation
  animation: ${slideInBtm} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
`
export const Button = styled(CustomButton)`
  @media ${device.phone} {
    margin-bottom: 10rem;
  }

  // Animation
  animation: ${slideInBtm} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
`
export const Email = styled.a`
  position: absolute;
  bottom: 5%;
  font-size: 1.3rem;
  font-family: var(--font-secondary);
  color: var(--color-secondary);
  background: transparent;
  padding-left: 18rem;

  &::before {
    content: "";
    width: 15rem;
    height: 1px;
    background: var(--color-primary);

    position: absolute;
    top: 50%;
    left: 0;

    pointer-events: none;
  }

  @media ${device.tabLand} {
    bottom: 10%;
  }
  @media ${device.phone} {
    bottom: 8%;
    font-size: 1.7rem;
  }

  @media ${device.smallPhone} {
    bottom: 5%;
  }

  // Animation
  animation: ${rollInLeft} 0.5s ease-out 2.5s both;
`
