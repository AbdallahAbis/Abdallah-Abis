import styled from "styled-components"
import device from "../../globalStyles/media-queries"
import CustomButton from "../../components/customButton/customButton.component"

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
  margin: 0 auto;

  color: var(--color-primary);

  align-items: center;

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
  font-family: var(--font-secondary);
  font-size: 1.6rem;

  margin-bottom: 1rem;

  color: var(--color-secondary);

  @media ${device.phone} {
    font-size: 2rem;
  }
`
export const ContactTitle = styled.div`
  font-weight: bold;
  font-size: 7rem;

  @media ${device.tabLand} {
    font-size: 6.5rem;
  }
`
export const Paragraph = styled.div`
  font-size: 1.6rem;
  line-height: 30px;

  margin: 3rem 0 7rem 0;

  text-align: center;

  @media ${device.tabPort} {
    font-size: 1.8rem;
  }

  @media ${device.phone} {
    font-size: 2rem;
  }
`

export const Button = styled(CustomButton)`
  margin-bottom: 25rem;
`
