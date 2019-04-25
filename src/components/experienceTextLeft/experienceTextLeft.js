import React from 'react';
import styled from "styled-components"
import Img from "gatsby-image"
// import { container, title, list, listItem, text, leftContent, rightContent, image } from "./experience.module.scss"
const Container = styled.div`
  width:100%;
  padding: 110px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #000;
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
  display: block;
  padding: 0;
`
const ListItem = styled.li`
  display: inline-block
  margin: 2px 8px 2px 0;
  padding: 2px 4px 2px 0;
  width:fit-content;
  color: orange;
  font-family: IBM Plex Sans;
  letter-spacing: -0.2px;
`

const experienceOne = ({ childImageSharp }) => {
  return (
    <section id="experience">
      <Container>
        <ImageSmallerScreen fluid={childImageSharp.fluid}/>
        <LeftContent>
          <Title>Brazil Dental Care</Title>
          <List>
            <ListItem>React</ListItem>
            <ListItem>Bootstrap</ListItem>
            <ListItem>Nodejs</ListItem>
            <ListItem>Expressjs</ListItem>
            <ListItem>Passportjs</ListItem>
            <ListItem>Mongoose</ListItem>
            <ListItem>MongoDB</ListItem>
          </List>
          <Text>
            An appointment
            system for a dentistry. The front end was
            primarily build with React and Bootstrap. The back end
            was developed in Node.js using Express.js with MongoDB as
            the database. I played a role both in the front and
            backend development.
          </Text>
        </LeftContent>
        <Image fluid={childImageSharp.fluid}  />
      </Container>
    </section>
  );
};

export default experienceOne;