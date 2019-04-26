import React from 'react';
import styled from "styled-components"
import Img from "gatsby-image"

const Container =  styled.div`
  background: ${props => props.theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 90px 0 160px 0;
  color: ${props => props.theme.color};
  @media(max-width: 1024px) {
    justify-content: space-between;
    padding: 0;
  }
  @media(max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding: 0;
    width: 100%;
  }
`
const LeftContent = styled.div`
  width: 540px;
  margin-right: 15px;
`
const Image = styled(Img)`
  margin-left: 64px;
  width: 540px;
  border-radius: 8px;
  @media(max-width: 900px){
    display: none;
  }
`
const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -1.2px;
`
const SubTitle = styled.h4`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 60px;
  letter-spacing: -1.2px;
  margin-bottom: 15px;
`
const Text = styled.p`
  margin-top: 15px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.2px;
  color: #BABABA;
`

const intro = ({ childImageSharp }) => {
  return (
    <section >
      <Container>
        <LeftContent >
          <Title>Omar Geerman</Title>
          <SubTitle>JAM-stack Developer</SubTitle>
          <Text>
            I am a self taught developer with 2 years of experience.
            During this period I had the opportunity to built some awesome projects with
            some of the most exciting tools and frameworks for web development. Below are a few examples.
          </Text>
        </LeftContent>

          <Image fluid={childImageSharp.fluid} />

      </Container>


    </section>
  );
};

export default intro;