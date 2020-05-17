import styled from "styled-components"
import device from "../../globalStyles/media-queries"

export const ContactContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-bottom: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--color-primary);

  @media ${device.tabLand} {
    width: 80%;
  }
  @media ${device.phone} {
    width: 90%;
  }
  @media ${device.smallPhone} {
    width: 100%;
  }
`
export const SubTitle = styled.div`
  color: var(--color-secondary);
  font-family: var(--font-secondary);
  font-size: 1.6rem;
  margin-bottom: 1rem;
`
export const ContactTitle = styled.div`
  font-weight: bold;
  font-size: 7rem;

  @media ${device.tabLand} {
    font-size: 6rem;
  }
`
export const Paragraph = styled.div`
  font-size: 1.6rem;
  line-height: 30px;
  margin: 3rem 0 7rem 0;
  text-align: center;
`
