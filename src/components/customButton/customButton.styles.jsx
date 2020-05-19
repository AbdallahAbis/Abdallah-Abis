import styled from "styled-components"
import device from "../../globalStyles/media-queries"

export const Button = styled.button`
  font-size: 1.5rem;
  font-family: var(--font-secondary);
  color: var(--color-secondary);
  background: transparent;
  padding: 1.5rem 2rem;
  border: 1px solid currentColor;
  border-radius: 5px;
  cursor: pointer;

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
