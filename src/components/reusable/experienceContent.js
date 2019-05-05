import React from 'react';
import styled from "styled-components"
import SkillsList from "../reusable/skillsList"

const experienceContent = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <SkillsList skills={props.skills} />
      <Text>{props.text}</Text>
    </>
  );
};

export default experienceContent;

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
  color: ${props => props.theme.textColor};
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