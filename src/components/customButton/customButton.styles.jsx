import styled from "styled-components"
import device from "../../globalStyles/media-queries"

export const Button = styled.button`
  font-family: var(--font-secondary);
  font-size: 1.5rem;

  padding: 1.5rem 2rem;

  cursor: pointer;

  color: var(--color-secondary);
  border: 1px solid currentColor;
  border-radius: 5px;
  background: var(--color-tertiary);

  transition: all 0.3s ease-in;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-tertiary);
    transition: all 0.3s ease-in;
  }

  @media ${device.laptop} {
    padding: 1.5rem 2rem;
  }

  @media ${device.phone} {
    font-size: 1.8rem;

    padding: 2rem 2.4rem;
  }

  @media ${device.smallPhone} {
    font-size: 1.8rem;
  }
`
