import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout.component"
import HeroSection from "../sections/hero/hero.section"
import AboutSection from "../sections/about/about.section"
import WorkSection from "../sections/work/work.section"
import ExperimentsSection from "../sections/experiments/experiments.section"
import ContactSection from "../sections/contact/contact.section"

import "../globalStyles/index.css"

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark.edges)

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <WorkSection work={data.allMarkdownRemark.edges} />
      <ExperimentsSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
      edges {
        node {
          frontmatter {
            title
            github
            external
            technologies
            image {
              childImageSharp {
                fluid(maxWidth: 864, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          htmlAst
        }
      }
    }
  }
`
