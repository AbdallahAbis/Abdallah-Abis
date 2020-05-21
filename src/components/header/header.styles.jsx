import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import { rollInRight, rollInTop } from "../../utils/animations"

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  display: flex;

  width: 100%;
  padding: 2rem 5rem;

  transition: 0.2s;

  background: var(--color-tertiary);

  align-items: center;
  justify-content: space-between;

  &.show {
    box-shadow: 0 1px 7px 6px rgba(0, 0, 0, 0.9);
  }

  &.hide {
    transform: translateY(-100%);
  }

  @media ${device.tabPort} {
    &.hide.true:nth-child(1) {
      transform: translateY(0);
    }
  }

  @media ${device.phone} {
    padding: 2rem 3rem;
  }
`
export const OptionsContainer = styled.div`
  display: flex;

  height: 100%;

  justify-content: space-between;
  align-items: center;
}

  @media ${device.tabPort} {
   position: fixed;
    z-index: 10;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;

    width: 70%;
    height: 100vh;
    padding: 20% 0 40% 0;

    transition: all .2s;
    transform: translateX(100%);

    background: var(--color-quaternary);

    align-items: center;

    &.true {
      overflow: hidden;

      transform: none;
    }
  }

  @media ${device.phone} {
    padding: 30% 0 50% 0;
  }
`

export const Option = styled.a`
  font-family: var(--font-secondary);
  font-size: 1.4rem;

  transition: all 0.5s;

  color: var(--color-primary);

  &:hover {
    color: var(--color-secondary);
  }

  &:last-child {
    color: var(--color-secondary);

    &:hover {
      padding: 1rem 2rem;

      color: var(--color-primary);
      border: 1px solid var(--color-secondary);
      border-radius: 3px;
    }
  }

  &:not(:last-child) {
    margin-right: 5rem;
  }

  @media ${device.laptop} {
    &:not(:last-child) {
      margin-right: 5rem;
    }
  }

  @media ${device.tabPort} {
    &:last-child {
      padding: 1rem 2rem;

      color: var(--color-secondary);
      border: 1px solid var(--color-secondary);
      border-radius: 3px;
    }

    &:not(:last-child) {
      margin: 0;
    }
  }

  @media ${device.phone} {
    font-size: 2.2rem;
  }

  &:nth-child(1) {
    animation: ${rollInTop} 2s ease-out both;
  }
  &:nth-child(2) {
    animation: ${rollInTop} 2s ease-out 0.1s both;
  }
  &:nth-child(3) {
    animation: ${rollInTop} 2s ease-out 0.2s both;
  }
  &:nth-child(4) {
    animation: ${rollInTop} 2s ease-out 0.3s both;
  }
  &:nth-child(5) {
    animation: ${rollInRight} 2s ease-out 0.4s both;
  }
`
