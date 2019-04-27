import React from 'react';
import styled from "styled-components"
import {FaTwitter, FaGithub} from "react-icons/fa"
import { useState } from "react";

const Container = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  letter-spacing: -0.1px;
  @media(max-width: 768px){
    justify-content: space-around;
  }
  @media(max-width: 425px){
    display: unset;
    text-align: center;
  }
`
const LeftContent = styled.div`
  margin-right: 60px;
  @media(max-width: 768px){
    margin: 0;
  }
`
const RightContent = styled.div`
  margin-left: 60px;
  padding-top: 168px;
  @media(max-width: 768px){
    margin: 0;
  }
  @media(max-width: 425px){
    margin: 86px auto;
    padding: 0px 0px;
  }
`
const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  letter-spacing: -0.8px;
`
const Text = styled.p`
  color: ${props => props.theme.textColor};
  width: 350px;
  height: 58px;
  @media(max-width: 425px){
    width: 100%
  }
`
const Form = styled.form`
  display: inline-grid;
`
const Input = styled.input`
background: ${props => props.theme.inputBackground};
border-radius: 8px;
width: 350px;
height: 58px;
border: none;
color: ${props => props.theme.textColor};
padding-left: 32px;
margin: 5px 0;
transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(255,255,255,0.35);
  }
  @media(max-width: 425px){
    width: 280px;
  }
  @media(max-width: 320px){
    width: 224px;
  }
`
const TextArea = styled.textarea`
padding: 16px 0 0 32px;
background: ${props => props.theme.inputBackground};
border-radius: 8px;
border: none;
color: ${props => props.theme.textColor};
margin: 5px 0 10px 0;
width: 350px;
height: 150px;
transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(255,255,255,0.35);

  }
  @media(max-width: 425px){
    width: 280px;
  }
  @media(max-width: 320px){
    width: 224px;
  }
`
const Button = styled.button`
  margin: 10px 0;
  border: none;
  background: ${props => props.theme.actionColor};
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
      background: ${props => props.theme.actionHover};
      color: ${props => props.theme.buttonHover};
      box-shadow: 0px 0px 16px 0px rgba(255,255,255,0.35);
    }
  @media(max-width: 425px){
    margin: 10px auto;
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
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin: 10px auto;
  margin-bottom:2px;
`
const ListText = styled.p`
  margin:0;
  font-size: 16px;
  color: ${props => props.theme.textColor}
`
const InnerList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  @media(max-width: 425px){
    justify-content: center;
  }
`
const InnerListItem = styled.li`
  padding-top: 8px;
  margin-right: 16px;
  color: #6D6D6D;
  font-size: 32px;
`
const Link = styled.a`
  font-size: 16px;
  letter-spacing: -0.1px;
  text-decoration: none;

  color: ${props => props.theme.actionColor};
  &:hover {
    color: ${props => props.theme.actionHover};
  }
`
const IconLink = styled.a`
  color: ${props => props.theme.actionColor};
  transition: all 0.3s ease;
  &:hover {
    color: ${props => props.theme.actionHover};
  }
`

const contact = () => {
  const [name, setName] = useState('')
  const [reply_to, setReplyTo] = useState('')
  const [message, setMessage] = useState('')
  const [formResponse, setFormResponse] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "name":
        setName(value.charAt(0).toUpperCase() + value.toLowerCase().slice(1))
        break
      case "email":
        setReplyTo(value.toLowerCase())
        break
      case "message":
        setMessage(value)
        break
      default:
        return null
    }

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name,
      reply_to,
      message
    }

    // Construct an HTTP request
    const xhr = new XMLHttpRequest()
    xhr.open("Post", "https://v6vrlgsk32.execute-api.us-east-1.amazonaws.com/dev/mailService", true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8")
    // Send the collected data as JSON
    xhr.send(JSON.stringify(data))

    xhr.onloadend = response => {
      const status = response.target.status;
      if (status === 200) {
        setFormResponse('succes')
      } else {
        setFormResponse('failure')
      }
    }

  }
  return (
    <section id="contact" method="POST">
      <Container>
        <LeftContent>
          <Title>Contact</Title>
            <Text>
              Questions? Submit the form or mail me.
              I will get back to you as soon as I can.
            </Text>
            <Form action="https://v6vrlgsk32.execute-api.us-east-1.amazonaws.com/dev/mailService" method="POST">
              <Input name="name" type="text" placeholder="Name" onChange={handleInputChange} />
              <Input name="email" type="email" placeholder="Email" onChange={handleInputChange} />
              <TextArea name="message" id="" cols="30" rows="10" placeholder="Message" onChange={handleInputChange} />
              <Button type="sumbit" onClick={handleSubmit}>Send</Button>
            </Form>
            {formResponse === "succes" ? <p>Thank you for contacting me! I'll get back to you shortly</p> : null}
        </LeftContent>
        <RightContent>
          <List>
            <ListItem>
              <ListTitle>Email</ListTitle>
              <Link href="mailto:omageerman@gmail.com">omargeerman@gmail.com</Link>
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