import React from "react"

import { NotFoundContainer, Title, SubTitle, Paragraph } from "./404.styles"

const NotFound = () => (
  <NotFoundContainer
    data-sal="zoom-in"
    data-sal-duration="1000"
    data-sal-delay="500"
    data-sal-easing="easeOutQuart"
  >
    <Title>404</Title>
    <SubTitle>I Think You Are Lost!</SubTitle>
    <Paragraph to="/" aria-label="go back to home page">
      Go Home »
    </Paragraph>
  </NotFoundContainer>
)

export default NotFound
