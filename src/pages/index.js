import React from "react"

import "../globalStyles/index.css"
import Layout from "../components/layout/layout.component"
import HeroSection from "../sections/hero/hero.section"
import AboutSection from "../sections/about/about.section"
import WorkSection from "../sections/work/work.section"
import ExperimentsSection from "../sections/experiments/experiments.section"
import ContactSection from "../sections/contact/contact.section"

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <WorkSection />
    <ExperimentsSection />
    <ContactSection/>
  </Layout>
)

export default IndexPage
