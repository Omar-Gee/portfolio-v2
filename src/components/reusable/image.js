import React from 'react';
import Img from "gatsby-image"
import styled from "styled-components"

const Image = styled(Img)`
  background: ${props => props.theme.background}
  margin-left: 64px;
  width: 540px;
  @media(max-width: 768px) {
    display: none;
  }
`

const image = (props) => {
  return (
    <>
     <Image fluid={props.image} />
    </>
  );
};

export default image;