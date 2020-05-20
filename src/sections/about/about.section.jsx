import React from "react"

import Title from "../../components/title/title.component"

import {
  AboutContainer,
  Paragraph,
  SkillsContainer,
  Skill,
} from "./about.styles"

const AboutSection = ({ AboutData }) => {
  const { title } = AboutData[0].node.frontmatter
  return (
    <AboutContainer
    id='about'
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="easeOutQuart"
    >
      <Title>{title}</Title>
      {AboutData.map(({ node: { frontmatter: { skills }, html } }, i) => (
        <React.Fragment key={i}>
          <Paragraph dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills.map((skill, i) => (
              <Skill key={i}>{skill}</Skill>
            ))}
          </SkillsContainer>
        </React.Fragment>
      ))}
    </AboutContainer>
  )
}

export default AboutSection
