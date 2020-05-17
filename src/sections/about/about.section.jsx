import React from "react"

import Title from "../../components/title/title.component"

import {
  AboutContainer,
  Paragraph,
  SkillsContainer,
  Skill,
  Space,
} from "./about.styles"

const AboutSection = () => (
  <AboutContainer>
    <Title>About Me.</Title>
    <Paragraph>
      I’m a 20 years old freelancer who’s based in Agadir, Morocco.
      <Space />
      I design and develop websites and web applications, I haven’t had the
      chance to work in a company yet, but I’ve been freelancing and networking
      with other developers for enough time to be a good designer and developer.
      <Space />
      “Less Is More”, I love dark and minimalist design, That’s why I try to
      make all of my projects simple and stunning. When it comes to code, I
      always write clean and understandable code, with as much documentation as
      possible.
    </Paragraph>
    <SkillsContainer>
      <Skill>HTML5 & CSS3</Skill>
      <Skill>JavaScript / ES6</Skill>
      <Skill>React.js</Skill>
      <Skill>Redux.js</Skill>
      <Skill>Sass & Scss</Skill>
      <Skill>Tailwind</Skill>
      <Skill>Bootstrap</Skill>
    </SkillsContainer>
  </AboutContainer>
)

export default AboutSection
