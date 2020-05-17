import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import CustomButton from "../../components/customButton/customButton.component"

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
`
export const Button = styled(CustomButton)`
  @media ${device.phone} {
    margin-bottom: 10rem;
  }
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
    background: var(--color-secondary);

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
`
