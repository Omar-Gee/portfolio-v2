import React from 'react';
import styled from "styled-components"

const skillsList = (props) => {
  return (
    <List>
      {props.skills.map(skill => <ListItem key={skill}>{skill}</ListItem>)}
    </List>
  );
};

export default skillsList;

const List = styled.ul`
  display: block;
  padding: 0;
  list-style: none;
`
const ListItem = styled.li`
  display: inline-block;
  margin: 2px 8px 2px 0;
  padding: 2px 4px 2px 0;
  width:fit-content;
  color: ${props => props.theme.experienceSkills};
  font-family: IBM Plex Sans;
  letter-spacing: -0.2px;
`