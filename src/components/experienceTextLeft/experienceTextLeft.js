import React from 'react';
import styled from "styled-components"
import bdclogo from "../../images/bdc-text.png"
// import { container, title, list, listItem, text, leftContent, rightContent, image } from "./experience.module.scss"
const Container = styled.div`
  padding: 110px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #000;
`
const LeftContent = styled.div`
  width: 635px;
  word-break: break-word;
`
const RightContent = styled.div`
  max-width: 445px;
`
const Image = styled.img`
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

const experienceOne = () => {
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
        <RightContent>
          <Image src={bdclogo} alt="BDC" />
        </RightContent>
      </Container>
    </section>
  );
};

export default experienceOne;