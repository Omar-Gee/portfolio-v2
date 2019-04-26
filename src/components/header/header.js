import React from "react"
import styled from "styled-components"

const Container = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.background};
  height: 118px;
  @media(max-width: 425px) {
    display: unset;
  }
`
const List = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  @media(max-width: 425px) {
    justify-content: space-between;
  }
`
const ListItemLeft = styled.li`
  position: relative;
  margin-right: 30px;
  font-weight: bold;
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
  }
  @media(max-width: 425px) {
    margin: 0;
  }
`

const ListItemRight = styled.li`
  margin-left: 30px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 14px;
  @media(max-width: 425px) {
    margin: 0;
    padding: 0;
  }
`
const Anchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.actionColor};
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 14px;
  &:hover {
    color: ${props => props.theme.actionHover};
    cursor: pointer;
  }
`

const ThemeButton = styled.div`
  background: ${props => props.theme.themeButtonBackground};
  color: ${props => props.theme.themeButtonColor};
  padding: 8px;
  margin: 4px;
  border-radius: 8px;
  &:hover {
    background: ${props => props.theme.themeButtonHoverBackground};
    color: ${props => props.theme.themeButtonHoverColor};
    cursor: pointer;
  }
  @media(max-width: 425px) {
    margin: 0;
    padding: 0;
  }
`

const Header = ({ mode, setMode }) =>{
  const handleThemeChange = (e) => {
    if (e.target.id === 'dark'){
      setMode('light')
    } else {
      setMode('dark')
    }
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
          <ListItemRight><ThemeButton id={mode} onClick={handleThemeChange}>{mode === 'dark' ? 'light':'dark'} mode</ThemeButton></ListItemRight>
        </List>
      </Container>
    </header>
  )
}

export default Header
