import React from 'react';
import styled from "styled-components"
import Img from "gatsby-image"

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
const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.2px;
  @media(max-width: 768px) {
    display:none;
  }
`
const Text = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.2px;
  @media(max-width: 425px) {
    float: left;
  }
`
const List = styled.ul`
  display: block;
  padding: 0;
`
const ListItem = styled.li`
  display: inline-block
  margin: 2px 8px 2px 0;
  padding: 2px 4px 2px 0;
  width:fit-content;
  color: ${({ theme }) => theme.experienceSkills};
  letter-spacing: -0.2px;
`
const Anchor = styled.a`
  color: ${({ theme }) => theme.actionColor};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.actionHover};
  }
`

const experienceTwo = ({ childImageSharp }) => {
  return (
    <section>
      <Container>
          <Image fluid={childImageSharp.fluid} />
          {/* <Image src={image.fluid} alt="Palmera bytes logo" /> */}
        <RightContent>
          <Title>Palmera Bytes Website</Title>
          <List>
            <ListItem>Gatsby</ListItem>
            <ListItem>Storybook</ListItem>
            <ListItem>Styled Components</ListItem>
            <ListItem>Graphql</ListItem>
            <ListItem>Prismic</ListItem>
            <ListItem>CMS</ListItem>
          </List>
          <Text>
            A static website built with Gatsby. The design was implemented using Storybook and Styled Components.
            The data is being queried with Graphql with the CMS Prismic as data source. The website is hosted on Netlify and is viewable
            {" "}<Anchor href="https://palmerabytes.com/">here</Anchor>.
          </Text>
        </RightContent>
      </Container>

    </section>
  );
};

export default experienceTwo;