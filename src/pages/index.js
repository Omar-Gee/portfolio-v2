import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
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
`

const IndexPage = () => {
  const theme = {
    main: "dark-mode",
  }
  return (
    <PageContainer>
      <ThemeProvider theme={theme}>
        <Layout>
          <Intro />
          <ExperienceTextLeft  />
          <ExperienceTextRight />
          <Skills />
          <Contact />
        </Layout>
      </ThemeProvider>
    </PageContainer>

  )
}

export default IndexPage
