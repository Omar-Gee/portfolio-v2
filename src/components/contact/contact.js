import React from 'react';
import styled from "styled-components"
import {FaTwitter, FaInstagram, FaGithub} from "react-icons/fa"
import { useState } from "react";

const Container = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  color: #fff;
  background-color: #000;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: -0.1px;
`
const LeftContent = styled.div`
  margin-right: 60px;

`
const RightContent = styled.div`
margin-left: 60px;
padding-top: 168px;
`
const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: -0.8px;
`
const Text = styled.p`
  color: #BABABA;
  width: 350px;
  height: 58px;
`
const Form = styled.form`
display: inline-grid;
`
const Input = styled.input`
background: #212121;
border-radius: 8px;
width: 350px;
height: 58px;
border: none;
color: white;
padding-left: 32px;
margin: 5px 0;
transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(255,255,255,0.35);

  }
`
const TextArea = styled.textarea`
padding: 16px 0 0 32px;
background: #212121;
border-radius: 8px;
border: none;
color: white;
margin: 5px 0 10px 0;
width: 350px;
height: 150px;
transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(255,255,255,0.35);

  }
`
const Button = styled.button`
margin: 10px 0;
border: none;
background: #FF8364;
border-radius: 8px;
width: 200px;
height: 58px;


font-weight: bold;
font-size: 24px;
line-height: 32px;
letter-spacing: -0.4px;

color: #FFFFFF;

transition: all 0.3s ease;
  &:hover {
    background: #FFFFFF;
    color: #6D6D6D;
    box-shadow: 0px 0px 16px 0px rgba(255,255,255,0.35);

  }
`
const List = styled.ul`
  padding:0;
  list-style: none;
`
const ListItem = styled.li`
margin: 19px 0;
`
const ListTitle = styled.h1`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.2px;
text-transform: uppercase;
`
const ListText = styled.p`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.1px;
`
const InnerList = styled.ul`
padding: 0;
list-style: none;
display: flex;
justify-content: space-between;
`
const InnerListItem = styled.li`

color: #6D6D6D;
font-size: 24px;
`
const Link = styled.a`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.1px;
text-decoration: none;
color: #FF8364;
&:hover {
  color: white;
}
`
const IconLink = styled.a`
color: #6D6D6D;
transition: all 0.3s ease;
&:hover {
  color: #FF8364;
}
`

const contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleInputChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "name":
        setName(value)
        break
      case "email":
       setEmail(value)
        break
      case "message":
        setMessage(value)
        break
      default:
        return null
    }

  }
  const handleSubmit = (e) => {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1)
    alert(`Oops!, it seems like you got far on my site ${formattedName}. Unfortunately I haven't set up the back-end part of this form yet. I have taken the liberty of opening your default email client with your message already attached. Sorry for the inconvenience.`)
    window.open(`mailto:omargeerman@gmail.com?subject=${email}&body=${message}`);
  }
  return (
    <section id="contact">
      <Container>
        <LeftContent>
          <Title>Contact</Title>
            <Text>
              Questions? Submit the form or mail me.
              I will get back to you as soon as I can.
            </Text>
            <Form action="">
              <Input name="name" type="text" placeholder="Name" onChange={handleInputChange} />
              <Input name="email" type="email" placeholder="Email" onChange={handleInputChange} />
              <TextArea name="message" id="" cols="30" rows="10" placeholder="Message" onChange={handleInputChange} />
              <Button type="sumbit" onClick={handleSubmit}>Send</Button>
            </Form>
        </LeftContent>
        <RightContent>
          <List>
            <ListItem>
              <ListTitle>Email</ListTitle>
              <Link href="mailto:omageerman@gmail.com"><ListText>omargeerman@gmail.com</ListText></Link>
            </ListItem>
            <ListItem>
              <ListTitle>Phone</ListTitle>
              <ListText>06-24274603</ListText>
            </ListItem>
            <ListItem>
              <ListTitle>Location</ListTitle>
              <ListText>
                Arnhem, Gelderland
                <br/>
                Netherlands
              </ListText>
            </ListItem>
            <ListItem>
              <ListTitle>Socials</ListTitle>
              <InnerList>
                <InnerListItem>
                  <IconLink href="https://twitter.com/og_fresh_pots" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </IconLink>
                </InnerListItem>
                <InnerListItem>
                  <IconLink href="https://twitter.com/og_fresh_pots" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </IconLink>
                </InnerListItem>
                <InnerListItem>
                  <IconLink href="https://github.com/Omar-Gee" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </IconLink>
                </InnerListItem>
              </InnerList>
            </ListItem>
          </List>
        </RightContent>
      </Container>

    </section>
  );
};

export default contact;