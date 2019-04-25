import React from 'react';
import styled from "styled-components"
import Img from "gatsby-image"
// import { container, title, list, listItem, text, leftContent, rightContent, image } from "./experience.module.scss"
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
    position: static;
    text-align: center;
  }
`
const LeftContent = styled.div`
  width: 635px;
  word-break: break-word;
  @media(min-width: 1024px){
    width: 560px;
  }
  @media(max-width: 768px) {
    position: relative;
    top: 95px;
    width:100%
  }
  @media(max-width: 768px) {
    top: 140px;
  }

`
const RightContent = styled.div`
  width: 540px;

  @media(max-width: 1024px) {
    width: 296px;

  }
  @media(max-width: 768px) {
    position: relative;
    top: -156px;
    margin: auto;
  }
  @media(max-width: 425px) {
    position: relative;
    margin: auto;
    top: -353px;
  }

  @media(max-width: 320px) {
    position: relative;
    margin: auto;
    top: -408px;
    left: -8px;
  }

`
const Image = styled(Img)`
position: relative;
width: inherit;
height: inherit;
  @media(max-width: 425px) {
    overflow: unset;
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
    width: 188px;
    margin: auto;
    float: left;
    padding: 8px 0;
  }
  @media(max-width: 375px) {
    width: 163px;
  }
  @media(max-width: 320px) {
        width: 136px;
  }
`

const experienceOne = ({ childImageSharp }) => {
  return (
    <section id="experience">
      <Container>
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
        <RightContent image={childImageSharp.fluid} >
          <Image fluid={childImageSharp.fluid}  />
          {/* <Image fluid={childImageSharp.fluid} objectFit="cover" alt="BDC" /> */}
        </RightContent>
      </Container>
    </section>
  );
};

export default experienceOne;