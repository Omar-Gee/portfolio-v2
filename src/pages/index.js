import React from "react"
import styled from "styled-components"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Intro from "../components/intro/intro"
import ExperienceTextLeft from  "../components/experienceTextLeft/experienceTextLeft"
import ExperienceTextRight from  "../components/experienceTextRight/experienceTextRight"
import Skills from  "../components/skills/skills"
import Contact from "../components/contact/contact"
import SEO from "../components/seo"
import Layout from "../components/Layout"

import { graphql } from "gatsby"
require('typeface-ibm-plex-sans')



const IndexPage = ({ data }) => {
  const [mode, setMode] = React.useState('dark')

  return (
      <>
        <Layout mode={mode}>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <Header setMode={setMode} />
          <Intro {...data.intro} />
          <ExperienceTextLeft {...data.bdclogo}  />
          <ExperienceTextRight {...data.pblogo} />
          <Skills />
          <Contact />
          <Footer />
        </Layout>
      </>


  )
}

export default IndexPage

export const IndexQuery = graphql`
query {
  intro: file(relativePath: {eq: "dev1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  pblogo: file(relativePath: {eq: "palmera-bytes-logo-white.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  bdclogo: file(relativePath: {eq: "bdc-text.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`