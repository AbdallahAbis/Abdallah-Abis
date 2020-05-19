import React from "react"

import Social from "../social/social.component"

import { FooterContainer, SocialMedia } from "./footer.styles"
const Footer = () => (
  <>
    <FooterContainer id="footer">
      <SocialMedia />
      <p> &copy; 2020 Abdallah Abis. All rights reserved.</p>
    </FooterContainer>
  </>
)

export default Footer
