import React from 'react';
import styled from "styled-components"

import { ThemeProvider } from "styled-components"

const PageContainer = styled.div`
  padding: 20px 128px;
  background: ${props => props.theme.background};
  @media(min-width:1500px) {
    margin: auto;
    width: 60%;
    padding:20px 128px;
  }
  @media(max-width: 1024px) {
    padding: 20px 64px;
  }
  @media(max-width: 768px) {
    padding: 20px 48px;
  }
  @media(max-width: 425px) {
    padding: 20px 24px;
  }
`
const theme = {
  light: {
    background:'#fff',
    actionOrange: '#FF8364',
    buttonHover: '#fff',
    color: '#000',
    textColor: '#616161',
    experienceSkills: 'orange',
    anchor: '#FF8364',
    imageBackground: '#000',
    inputBackground: '#f3f3f3',
    iconColor: 'cornflowerblue'
  },
  dark: {
    background:'#000',
    actionOrange: '#FF8364',
    buttonHover: '#000',
    color: '#fff',
    textColor: '#BABABA',
    experienceSkills: 'orange',
    anchor: '#FF8364',
    imageBackground: '#000',
    inputBackground: '#212121',
    iconColor: '#fff'
  }
}


const Layout = ({mode, children}) => {
  return (
    <ThemeProvider theme={theme[mode]}>
      <PageContainer>
        {children}
      </PageContainer>
    </ThemeProvider>
  );
};

export default Layout;