import React, { useState } from "react"

import sal from "sal.js"
import "sal.js/dist/sal.css"

import { GlobalStyles } from "../globalStyles/globalStyles"
import Layout from "../components/layout/layout.component"
import HeroSection from "../sections/hero/hero.section"
import AboutSection from "../sections/about/about.section"
import WorkSection from "../sections/work/work.section"
import ExperimentsSection from "../sections/experiments/experiments.section"
import ContactSection from "../sections/contact/contact.section"
import Loader from "../components/loader/loader.component"

import "../globalStyles/index.css"

const IndexPage = () => {
  React.useEffect(() => {
    sal()
  })
  const [count, setCount] = useState(1000)

  setTimeout(function () {
    setCount(0)
  }, 2000)

  return (
    <>
      <GlobalStyles />
      {count !== 0 ? (
        <Loader />
      ) : (
        <Layout>
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ExperimentsSection />
          <ContactSection />
        </Layout>
      )}
    </>
  )
}

export default IndexPage
