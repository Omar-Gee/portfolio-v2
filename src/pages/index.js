import React from "react"
import styled from "styled-components"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Intro from "../components/intro/intro"
import ExperienceTextLeft from  "../components/experienceTextLeft/experienceTextLeft"
import ExperienceTextRight from  "../components/experienceTextRight/experienceTextRight"
import Skills from  "../components/skills/skills"
import Contact from "../components/contact/contact"
import { ThemeProvider } from "styled-components"
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

  }
  @media(max-width: 375px) {

  }
  @media(max-width: 320px) {

  }
`

const IndexPage = () => {
  const theme = {
    main: "dark-mode",
  }
  return (
    <PageContainer>
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Intro />
          <ExperienceTextLeft  />
          <ExperienceTextRight />
          <Skills />
          <Contact />
          <Footer />
        </>
      </ThemeProvider>
    </PageContainer>

  )
}

export default IndexPage
