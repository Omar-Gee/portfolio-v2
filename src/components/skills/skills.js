import React from 'react';
import styled from "styled-components"
// import { container, title, list, listItem, skillGroup, middleGroup, groupContainer } from "./skills.module.scss"

const Container = styled.div`
background: #000;;
padding: 64px 0;
color: #fff;
@media(max-width: 425px) {
  clear: left;
}
`
const GroupContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width: 425px) {
    display: unset;

  }

`
const Title = styled.h1`
margin: 8px 0 32px 0;
font-family: IBM Plex Sans;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 26px;
letter-spacing: -0.2px;
`
const SkillGroup = styled.div`
  text-align: center;
  @media(max-width: 425px) {
    margin: 16px 0;
    padding: 24px 0;
  }
`
// const MiddleGroup = styled.div`
// text-align: center;
// padding: 64px 128px;
// border-left: 1px solid #444444;
// border-right: 1px solid #444444;
// `
const List = styled.ul`
padding: 0;
list-style: none;
`
const ListItem = styled.li`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.2px;
  @media(max-width: 425px) {
    padding: 8px 0;
  }


`

const skills = () => {
  return (
    <section id="skills">
      <Container>
        <GroupContainer>
          <SkillGroup>
            <Title>Front-end</Title>
            <List>
              <ListItem>React</ListItem>
              <ListItem>Styled Components</ListItem>
              <ListItem>Gatsby</ListItem>
              <ListItem>Bootstrap</ListItem>
              <ListItem>HTML 5</ListItem>
              <ListItem>CSS 3</ListItem>
            </List>
          </SkillGroup>
          <SkillGroup>
            <Title>Back-end</Title>
            <List>
              <ListItem>Nodejs</ListItem>
              <ListItem>Expressjs</ListItem>
              <ListItem>MongoDB</ListItem>
              <ListItem>Postgres</ListItem>
              <ListItem>Spring Boot</ListItem>
              <ListItem>Authentication & Authorization</ListItem>
            </List>
          </SkillGroup>
          <SkillGroup>
            <Title>Tools</Title>
            <List>
              <ListItem>Jira</ListItem>
              <ListItem>SCRUM</ListItem>
              <ListItem>Git</ListItem>
              <ListItem>Postman</ListItem>
              <ListItem>Swagger</ListItem>
              <ListItem>CMS</ListItem>
            </List>
          </SkillGroup>
        </GroupContainer>
      </Container>
    </section>
  );
};

export default skills;