import styled from "styled-components"
import device from "../../globalStyles/media-queries"

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-secondary);
  font-size: 1.1rem;
  color: var(--color-primary);
  background: var(--color-tertiary);
  z-index: 1000;

  border-top: 1px solid var(--color-quaternary);

  @media ${device.phone} {
    font-size: 1.5rem;
  }
`
