import React from 'react';
import styled from "styled-components"
// import footerStyles from "./footer.module.scss"

const Container = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;

  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.background};
  height: 118px;
  color: ${props => props.theme.color};
  @media(max-width: 425px){
    position: static;
    display: unset;
    text-align: center;
  }
`
const Text = styled.p`
  line-height: 24px;
  letter-spacing: -0.1px;
  color: ${props => props.theme.textColor};
  @media(max-width: 425px){
    position: relative;
    top: 49px;
  }
`
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media(max-width: 425px){
    padding: 0;
    position: relative;
    top: -59px;
  }
`
const ListItem = styled.li`
  margin-left: 30px;
  position: relative;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.actionHover};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover::before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    color: ${props => props.theme.actionColor};
  }
  @media(max-width: 425px){
    margin-left:0;
  }
  @media(max-width: 375px){
    margin-left:0;
  }
  @media(max-width: 320px){
    margin-left:0;
  }

`
const Anchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.actionColor};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.actionHover};
  }
`

const footer = (props) => {
  return (
    <footer>
      <Container>
        <Text>Copyright Omar Geerman 2019</Text>
        <List>
          <ListItem><Anchor href="#experience">Experience</Anchor></ListItem>
          <ListItem><Anchor href="#skills">Skills</Anchor></ListItem>
          <ListItem><Anchor href="#contact">Contact</Anchor></ListItem>
        </List>
      </Container>
    </footer>
  );
};

export default footer;