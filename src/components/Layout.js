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
    color: '#000'

  },
  dark: {
    background:'#000',
    color: '#fff'
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