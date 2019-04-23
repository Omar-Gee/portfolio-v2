import React from 'react';

import footerStyles from "./footer.module.scss"

const footer = () => {
  return (
    <footer className={footerStyles.container}>
        <p className={footerStyles.text}>Copyright Omar Geerman 2019</p>
        <ul className={footerStyles.list}>
          <li><a className={footerStyles.listItem} href="">First Link</a></li>
          <li><a className={footerStyles.listItem} href="">Second Link</a></li>
          <li><a className={footerStyles.listItem} href="">Third Link</a></li>
        </ul>
    </footer>
  );
};

export default footer;