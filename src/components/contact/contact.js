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

const contact = () => {
  return (
    <section className={container}>
      <div className={leftContent}>
        <h1 className={title}>Contact</h1>
          <p className={text}>
            Questions? Submit the form or mail me.
            I will get back to you as soon as I can.
          </p>
          <form className={form}>
            <input className={input} name="name" type="text" placeholder="Name" />
            <input className={input} name="email" type="email" placeholder="Email" />
            <textarea className={textArea} name="message" id="" cols="30" rows="10" placeholder="Message" />
            <button className={button}>Send</button>
          </form>
      </div>
      <div className={rightContent}>
        <ul className={list}>
          <li className={listItem}>
            <a href=""><p className={listTitle}>Email</p></a>
            <p className={link}>omargeerman@gmail.com</p>
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
                <a className={iconLink} href="">
                  <FaTwitter />
                </a>
              </li>
              <li className={innerListItem}>
                <a className={iconLink} href="">
                  <FaInstagram />
                </a>
              </li>
              <li className={innerListItem}>
                <a className={iconLink} href="">
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