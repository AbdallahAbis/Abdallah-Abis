import React from "react"

import CustomButton from "../../components/customButton/customButton.component"

import {
  ContactContainer,
  SubTitle,
  ContactTitle,
  Paragraph,
} from "./contact.styles"

const ContactSection = () => (
  <ContactContainer>
    <SubTitle>I’m looking for an opportunity</SubTitle>
    <ContactTitle>Get In Touch!</ContactTitle>
    <Paragraph>
      If you are looking for a freelancer then you are in the right place, as
      I’m currently freelancing full time, or if you are looking for a full-time
      employee, otherwise, if you just want to say hi, I will definitely say Hi
      back to you.
    </Paragraph>
    <a href="mailto:abis.abdallah@gmail.com">
      <CustomButton>Send Message</CustomButton>
    </a>
  </ContactContainer>
)

export default ContactSection