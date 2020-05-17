import React from "react"

import "../globalStyles/index.css"
import Layout from "../components/layout/layout.component"
import HeroSection from "../sections/hero/hero.section"
import AboutSection from "../sections/about/about.section"

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
  </Layout>
)

export default IndexPage
