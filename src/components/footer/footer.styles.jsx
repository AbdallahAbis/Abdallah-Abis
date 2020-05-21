import styled from "styled-components"
import device from "../../globalStyles/media-queries"
import Social from "../social/social.component"

export const FooterContainer = styled.div`
  font-family: var(--font-secondary);
  font-size: 1.2rem;

  position: absolute;
  z-index: 1000;
  bottom: 0;
  left: 0;

  display: flex;

  width: 100%;
  height: 6rem;

  color: var(--color-primary);
  border-top: 1px solid var(--color-quaternary);
  background: var(--color-tertiary);

  align-items: center;
  justify-content: center;

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

    display: flex;

    width: 25%;

    transform: translateX(-50%);

    justify-content: space-between;
    align-items: center;
}

    & > * {
      width: 2.5rem;
      height: 2.5rem;
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
