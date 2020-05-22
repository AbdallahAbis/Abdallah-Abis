import styled from "styled-components"
import { Link } from "gatsby"

export const NotFoundContainer = styled.div`
  height: 100vh;
  font-family: var(--font-secondary);

  color: var(--color-primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  font-size: 15rem;
`
export const SubTitle = styled.p`
  font-size: 2rem;
  margin-top: -2rem;
  color: var(--color-secondary);
`
export const Paragraph = styled(Link)`
  font-size: 1.6rem;
  margin-top: 5rem;
`
