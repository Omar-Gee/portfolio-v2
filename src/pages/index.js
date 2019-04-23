import React from "react"



import Layout from "../components/layout/layout"
import Intro from "../components/intro/intro"
import ExperienceOne from  "../components/experience-one/experienceOne"
import ExperienceTwo from  "../components/experience-two/experienceTwo"
import Skills from  "../components/skills/skills"
import Contact from "../components/contact/contact"

require('typeface-ibm-plex-sans')

const IndexPage = () => (
  <Layout>
    <Intro />
    <ExperienceOne  />
    <ExperienceTwo />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
