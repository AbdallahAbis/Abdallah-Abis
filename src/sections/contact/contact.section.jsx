import React from "react"
import info from "../../info"

import {
  ContactContainer,
  SubTitle,
  ContactTitle,
  Paragraph,
  Button,
} from "./contact.styles"

const ContactSection = ({ ContactData }) => {
  const {
    frontmatter: { subtitle, title, buttonText },
    html,
  } = ContactData[0].node

  return (
    <ContactContainer
    id='contact'
      data-sal="zoom-in"
      data-sal-duration="1000"
      data-sal-easing="easeOutQuart"
    >
      <SubTitle>{subtitle}</SubTitle>
      <ContactTitle>{title}</ContactTitle>
      <Paragraph dangerouslySetInnerHTML={{ __html: html }} />
      <a aria-label="mail to me" href={`mailto:${info.email}`}>
        <Button>{buttonText}</Button>
      </a>
    </ContactContainer>
  )
}

export default ContactSection
