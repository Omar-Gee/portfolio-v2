import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  height: 118px;
`
const List = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`
const ListItemLeft = styled.li`
  position: relative;
  margin-right: 30px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #FF8364;
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
    color: #FF8364;
  }
`

const ListItemRight = styled.li`
  position: relative;
  margin-left: 30px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #FF8364;
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
    color: #FF8364;
  }
`
const Anchor = styled.a`
  text-decoration: none;
  color: #FFF;
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 14px;
  &:hover {
    color: #FF8364;
    cursor: pointer;
  }
`

const Button = styled.button`
background: #000;
border: none;
font-weight: bold;
text-decoration: none;
color: #FFF;
line-height: normal;
letter-spacing: 0.4px;
text-transform: uppercase;
font-size: 14px;
&:hover {
  color: #FF8364;
  cursor: pointer;
}
`
const Header = () =>{
  const handleThemeChange = (e) => {
    console.log(e.target.name);
  }
  return (
    <header>
      <Container>
        <List>
          <ListItemLeft><Anchor href="#experience">Experience</Anchor></ListItemLeft>
          <ListItemLeft><Anchor href="#skills">Skills</Anchor></ListItemLeft>
          <ListItemLeft><Anchor href="#contact">Contact</Anchor></ListItemLeft>
        </List>
        <List>
          <ListItemRight><Button name="dark-mode" >Dark mode</Button></ListItemRight>
          <ListItemRight><Button name="light-mode">Light mode</Button></ListItemRight>
        </List>
      </Container>
    </header>
  )
}

export default Header
