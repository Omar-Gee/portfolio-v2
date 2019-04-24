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
`
const LeftContent = styled.div`
  width: 445px;
`
const RightContent = styled.div`
  width: 635px;
  word-break: break-word;
`
const Image = styled.img`
  width: 267px;
  height: 232px;
`
const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.2px;
`
const Text = styled.p`
  color: #BABABA;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.2px;
`
const List = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
`
const ListItem = styled.li`
  color: orange;
  font-family: IBM Plex Sans;
  letter-spacing: -0.2px;
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