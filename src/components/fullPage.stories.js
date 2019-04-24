import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"

import Header from "./header/header"
import Intro from "./intro/intro"
import ExperienceTextLeft from "./experienceTextLeft/experienceTextLeft"
import ExperienceTextRight from "./experienceTextRight/experienceTextRight"
import Skills from "./skills/skills"
import Contact from "./contact/contact"
import Footer from  "./footer/footer"

const Container = styled.div`

`

storiesOf('Full Page', module)
  .add('example', () => (
    <Container>
      <Header />
      <Intro />
      <ExperienceTextLeft />
      <ExperienceTextRight />
      <Skills />
      <Contact />
      <Footer />
    </Container>
  ))