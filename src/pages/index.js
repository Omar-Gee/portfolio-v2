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
import { ThemeProvider } from "styled-components"
import { graphql } from "gatsby"
// import { ThemeProvider } from "../components/utils/themeContext"
require('typeface-ibm-plex-sans')

const PageContainer = styled.div`
  padding:20px 128px;
  background: #000;
  @media(1500px) {
    padding:20px 128px;
  }
  @media(max-width: 1024px) {
    padding: 20px 64px;
  }
  @media(max-width: 768px) {
    padding: 20px 48px;
  }
  @media(max-width: 425px) {
    padding: 20px 24px;
  }
  @media(max-width: 375px) {

  }
  @media(max-width: 320px) {

  }
`

const IndexPage = ({ data }) => {
  //console.log(data.bdclogo);
  const theme = {
    main: "dark-mode",
  }
  return (
    <PageContainer>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Intro {...data.intro} />
          <ExperienceTextLeft {...data.bdclogo}  />
          <ExperienceTextRight {...data.pblogo} />
          <Skills />
          <Contact />
          <Footer />
        </>
      </ThemeProvider>
    </PageContainer>

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