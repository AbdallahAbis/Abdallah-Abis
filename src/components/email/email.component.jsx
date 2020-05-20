import React from "react"

import { email } from "../../info"

import { EmailContainer, EmailAddress } from "./email.styles"

const Email = () => (
  <EmailContainer>
    <EmailAddress aria-label='mail to me' href={`mailto:${email}`}>
      {email}
    </EmailAddress>
  </EmailContainer>
)

export default Email
