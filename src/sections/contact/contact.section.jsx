import React from "react"

import {
  ContactContainer,
  SubTitle,
  ContactTitle,
  Paragraph,
  Button,
} from "./contact.styles"

const ContactSection = ({ ContactData }) => {
  console.log(ContactData)

  const {
    frontmatter: { subtitle, title, buttonText },
    html,
  } = ContactData[0].node

  return (
    <ContactContainer
      data-sal="zoom-in"
      data-sal-duration="1000"
      data-sal-easing="easeOutQuart"
    >
      <SubTitle>{subtitle}</SubTitle>
      <ContactTitle>{title}</ContactTitle>
      <Paragraph dangerouslySetInnerHTML={{ __html: html }} />
      <a aria-label="mail to me" href="mailto:abis.abdallah@gmail.com">
        <Button>{buttonText}</Button>
      </a>
    </ContactContainer>
  )
}

export default ContactSection
