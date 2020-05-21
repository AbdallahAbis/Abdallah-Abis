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

  width: 1.8rem;
  height: 1.8rem;
  margin-bottom: 3rem;

  cursor: pointer;
  transition: all 0.2s;

  fill: var(--color-primary);

  &:hover {
    fill: var(--color-secondary);
    transform: scale(1.3);
  }
`
