import React from "react"

import { email } from "../../info"

import { EmailContainer, EmailAddress } from "./email.styles"

const Email = () => (
  <EmailContainer>
    <EmailAddress href={`mailto:${email}`}>{email}</EmailAddress>
  </EmailContainer>
)

export default Email
