import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout.component"
import HeroSection from "../sections/hero/hero.section"
import AboutSection from "../sections/about/about.section"
import WorkSection from "../sections/work/work.section"
import ExperimentsSection from "../sections/experiments/experiments.section"
import ContactSection from "../sections/contact/contact.section"

const IndexPage = ({ data }) => (
  <Layout>
    <HeroSection HeroData={data.Hero.edges} />
    <AboutSection AboutData={data.About.edges} />
    <WorkSection WorkData={data.Work.edges} />
    <ExperimentsSection ExperimentsData={data.Experiments.edges} />
    <ContactSection ContactData={data.Contact.edges} />
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  {
    Hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            name
            slogan
            buttonText
          }
          html
        }
      }
    }
    About: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            skills
          }
          html
        }
      }
    }
    Work: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
      edges {
        node {
          frontmatter {
            title
            github
            external
            technologies
            image {
              childImageSharp {
                fluid(
                  maxWidth: 864
                  quality: 80
                  traceSVG: { color: "#0a192f" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }

    Experiments: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experiments/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            link
            image {
              publicURL
            }
          }
        }
      }
    }

    Contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          frontmatter {
            subtitle
            title
            buttonText
          }
          html
        }
      }
    }
  }
`
