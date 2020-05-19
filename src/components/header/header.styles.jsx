import styled from "styled-components"
import device from "../../globalStyles/media-queries"

import { rollInRight, rollInTop } from "../../utils/animations"

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  z-index: 100;
  background: var(--color-tertiary);
  transition: 0.2s;

  &.show {
    box-shadow: 0 1px 7px 6px rgba(0, 0, 0, 0.9);
  }
  &.hide {
    transform: translateY(-100%);
  }

  @media ${device.phone} {
    padding: 2rem 3rem;
  }
`
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  &.true {
    transform: none;
  }

  @media ${device.tabPort} {
    height: 100vh;
    width: 70%;
    background: var(--color-quaternary);
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20% 0 40% 0;
    transform: translateX(100%);
    transition: all 0.2s;
    z-index: 10;
  }

  @media ${device.phone} {
    padding: 30% 0 50% 0;
  }
`

export const Option = styled.a`
  font-family: var(--font-secondary);
  color: var(--color-primary);
  font-size: 1.4rem;
  transition: all 0.5s;

  &:hover {
    color: var(--color-secondary);
  }

  &:last-child {
    color: var(--color-secondary);
    &:hover {
      color: var(--color-primary);
      border: 1px solid var(--color-secondary);
      border-radius: 3px;
      padding: 1rem 2rem;
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
      color: var(--color-secondary);
      border: 1px solid var(--color-secondary);
      border-radius: 3px;
      padding: 1rem 2rem;
    }
    &:not(:last-child) {
      margin: 0;
    }
  }

  @media ${device.phone} {
    font-size: 2.2rem;
  }

  // Animation

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
