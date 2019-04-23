import React from 'react';
import {FaTwitter, FaInstagram, FaGithub} from "react-icons/fa"
import {
  container,
  leftContent,
  rightContent,
  title,
  text,
  form,
  input,
  textArea,
  button,
  list,
  listTitle,
  listText,
  innerList,
  listItem,
  innerListItem,
  link,
  iconLink
} from "./contact.module.scss"
import { useState } from "react";

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
    <section className={container} id="contact">
      <div className={leftContent}>
        <h1 className={title}>Contact</h1>
          <p className={text}>
            Questions? Submit the form or mail me.
            I will get back to you as soon as I can.
          </p>
          <form className={form} action="">
            <input className={input} name="name" type="text" placeholder="Name" onChange={handleInputChange} />
            <input className={input} name="email" type="email" placeholder="Email" onChange={handleInputChange} />
            <textarea className={textArea} name="message" id="" cols="30" rows="10" placeholder="Message" onChange={handleInputChange} />
            <button className={button} type="sumbit" onClick={handleSubmit}>Send</button>
          </form>
      </div>
      <div className={rightContent}>
        <ul className={list}>
          <li className={listItem}>
            <p className={listTitle}>Email</p>
            <a className={link} href="mailto:omageerman@gmail.com"><p className={link}>omargeerman@gmail.com</p></a>
          </li>
          <li className={listItem}>
            <p className={listTitle}>Phone</p>
            <p className={listText}>06-24274603</p>
          </li>
          <li className={listItem}>
            <p className={listTitle}>Location</p>
            <p className={listText}>
              Arnhem, Gelderland
              <br/>
              Netherlands
            </p>
          </li>
          <li className={listItem}>
            <p className={listTitle}>Socials</p>
            <ul className={innerList}>
              <li className={innerListItem}>
                <a className={iconLink} href="https://twitter.com/og_fresh_pots" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li className={innerListItem}>
                <a className={iconLink} href="https://twitter.com/og_fresh_pots" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li className={innerListItem}>
                <a className={iconLink} href="https://github.com/Omar-Gee" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default contact;