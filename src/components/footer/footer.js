import React from 'react';

import footerStyles from "./footer.module.scss"

const footer = () => {
  return (
    <footer className={footerStyles.container}>
        <p className={footerStyles.text}>Copyright Omar Geerman 2019</p>
        <ul className={footerStyles.list}>
          <li><a className={footerStyles.listItem} href="#experience">Experience</a></li>
          <li><a className={footerStyles.listItem} href="#skills">Skills</a></li>
          <li><a className={footerStyles.listItem} href="#contact">Contact</a></li>
        </ul>
    </footer>
  );
};

export default footer;