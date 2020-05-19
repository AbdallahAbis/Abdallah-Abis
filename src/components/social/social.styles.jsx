import styled from "styled-components"

export const SocialContainer = styled.div`
  &:hover {
    color: var(--color-secondary);
    &::after {
      background: var(--color-primary);
    }
  }
`
export const Icon = styled.a`
  display: block;
  height: 1.8rem;
  width: 1.8rem;
  fill: var(--color-primary);
  margin-bottom: 3rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    fill: var(--color-secondary);
    transform: scale(1.3);
  }
`
