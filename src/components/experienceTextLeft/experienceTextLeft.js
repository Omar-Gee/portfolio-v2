import React from 'react';
import styled from "styled-components"
import Img from "gatsby-image"
import ExperienceContent from "../reusable/experienceContent"

import { skillSetOne } from  "../../data/skills.data"

const experienceOne = ({ childImageSharp }) => {
  return (
    <section id="experience">
      <Container>
        <ImageSmallerScreen fluid={childImageSharp.fluid}/>
        <LeftContent>
          <ExperienceContent
            title="Brazil Dental Care"
            skills={skillSetOne}
            text={`An appointment
            system for a dentistry. The front end was
            primarily build with React and Bootstrap. The back end
            was developed in Node.js using Express.js with MongoDB as
            the database. I played a role both in the front and
            backend development.`}
          />
        </LeftContent>
        <Image fluid={childImageSharp.fluid}  />
      </Container>
    </section>
  );
};

export default experienceOne;

const Container = styled.div`
  width:100%;
  padding: 110px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  @media(max-width: 768px) {
    display: unset;
    position: static;
    text-align: center;
  }
`
const LeftContent = styled.div`
  width: 635px;
  word-break: break-word;
  @media(max-width: 768px) {
    width:100%
  }
`

const Image = styled(Img)`
  background: ${props => props.theme.background}
  margin-left: 64px;
  width: 540px;
  @media(max-width: 768px) {
    display: none;
  }
`
const ImageSmallerScreen = styled(Img)`
  display:none;
  @media(max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 40px 16px;
  }
`
