import React from 'react';
import styled from "styled-components"
import Img from "gatsby-image"
import ExperienceContent from "../reusable/experienceContent"

import { skillSetTwo} from  "../../data/skills.data"

const experienceTwo = ({ childImageSharp }) => {
  return (
    <section>
      <Container>
        <Image fluid={childImageSharp.fluid} />
        <RightContent>
          <ExperienceContent
            title="Palmera Bytes Website"
            skills={skillSetTwo}
            text={`A static website built with Gatsby. The design was implemented using Storybook and Styled Components.
            The data is being queried with Graphql with the CMS Prismic as data source. The website is hosted on Netlify.`}
          />
        </RightContent>
      </Container>
    </section>
  );
};

export default experienceTwo;

const Container = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  width:100%;
  padding: 110px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  @media(max-width: 768px) {
    display: unset;
    text-align: center;
  }
`
const RightContent = styled.div`
  width: 635px;
  word-break: break-word;
  @media(max-width: 768px){
    width: 100%;
  }
`
const Image = styled(Img)`
  background: ${props => props.theme.imageBackground};
  border-radius: 12px;
  width: 540px;
  margin-right: 128px;
  zoom: 0.6;
  @media(max-width: 768px) {
    margin: auto;
    margin-top: 102px;
    margin-bottom: 51px;
  }
  @media(max-width: 327px) {
    display: flex;
    zoom: 0.5;
    margin: auto;
  }
`