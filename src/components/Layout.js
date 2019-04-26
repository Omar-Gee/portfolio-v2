import React from 'react';
import styled from "styled-components"

import { ThemeProvider } from "styled-components"

const PageContainer =styled.div`
  background: ${props => props.theme.background};
`

const PageInnerContainer = styled.div`
  padding: 20px 128px;

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
    actionColor: 'cornflowerblue',
    actionHover: '#FF8364',

    themeButtonBackground: 'cornflowerblue',
    themeButtonColor: '#fff',
    themeButtonHoverBackground: '#000',
    themeButtonHoverColor: '#fff',

    buttonHover: '#fff',
    color: '#000',
    textColor: '#616161',
    experienceSkills: 'orange',
    anchor: '#FF8364',
    imageBackground: 'cornflowerblue',
    inputBackground: '#f3f3f3',

  },
  dark: {
    background:'#000',
    actionColor: '#FF8364',
    actionHover: '#fff',
    themeButtonBackground: 'cornflowerblue',
    themeButtonColor: '#fff',
    themeButtonHoverBackground: '#fff',
    themeButtonHoverColor: 'cornflowerblue',
    buttonHover: '#000',
    color: '#fff',
    textColor: '#BABABA',
    experienceSkills: 'orange',
    anchor: '#FF8364',
    imageBackground: '#000',
    inputBackground: '#212121',

  }
}


const Layout = ({mode, children}) => {
  return (
    <ThemeProvider theme={theme[mode]}>
      <PageContainer>
        <PageInnerContainer>
          {children}
        </PageInnerContainer>
      </PageContainer>
    </ThemeProvider>
  );
};

export default Layout;