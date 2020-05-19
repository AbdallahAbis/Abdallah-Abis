import styled from "styled-components"
import device from "../../globalStyles/media-queries"
import Social from "../social/social.component"

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
export const SocialMedia = styled(Social)`
  display: none;
  @media ${device.tabPort} {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    width: 25%;
    justify-content: space-between;
    align-items: center;

    & > * {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
  @media ${device.phone} {
    top: -120%;
    width: 50%;
    & > * {
      height: 3rem;
      width: 3rem;
    }
  }
`
