import React from 'react';
import styled from "styled-components"
import pblogo from "../../images/palmera-bytes-logo-white.png"
// import { container, title, list, listItem, text, leftContent, rightContent, pbwLink, image } from "./experience.module.scss"

const Container = styled.div`
  padding: 110px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #000;
  @media(min-width: 1500px){
    justify-content: space-evenly;
  }
  @media(max-width: 1023px){
    justify-content: space-between;
  }
  @media(max-width: 768px) {
    display: unset;
    text-align: center;
  }
`
const LeftContent = styled.div`
  width: 267px;
  height: 232px;
  @media(max-width: 768px) {
    width: 209px;
    height: 179px;
    margin: auto;
    margin: 88px auto;
  }
`
const RightContent = styled.div`
  width: 635px;
  word-break: break-word;
  @media(max-width: 1024px){
    width: 560px;
  }
  @media(max-width: 768px){
    width: 100%;
  }
`
const Image = styled.img`
  width: inherit;
  height: inherit;
`
const Title = styled.h1`
  font-family: IBM Plex Sans;
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
  color: #BABABA;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.2px;
  @media(max-width: 425px) {
    float: left;
  }
`
const List = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media(max-width: 425px) {
    display: list-item;
    margin: auto;
  }
`
const ListItem = styled.li`
  color: orange;
  font-family: IBM Plex Sans;
  letter-spacing: -0.2px;
  @media(max-width: 425px) {
    width: 164px;
    margin: auto;
    float: left;
    padding: 8px 0;
  }
`
const Anchor = styled.a`
  color: #FF8364;
  text-decoration: none;
`

const experienceTwo = () => {
  return (
    <section>
      <Container>
        <LeftContent>
          <Image src={pblogo} alt="Palmera bytes logo" />
        </LeftContent>
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