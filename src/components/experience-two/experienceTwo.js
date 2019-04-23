import React from 'react';

import pblogo from "../../images/palmera-bytes-logo-white.png"
import { container, title, list, listItem, text, leftContent, rightContent, pbwLink, image } from "./experience.module.scss"

const experienceTwo = () => {
  return (
    <section className={container}>
    <div className={rightContent}>
        <img className={image} src={pblogo} alt="Palmera bytes logo" />
      </div>
      <div className={leftContent}>
        <h1 className={title}>Palmera Bytes Website</h1>
        <ul className={list}>
          <li className={listItem}>Gatsby</li>
          <li className={listItem}>Storybook</li>
          <li className={listItem}>Styled Components</li>
          <li className={listItem}>Graphql</li>
          <li className={listItem}>Prismic</li>
          <li className={listItem}>CMS</li>
        </ul>
        <p className={text}>
          A static website built with Gatsby. The design was implemented using Storybook and Styled Components.
          The data is being queried with Graphql with the CMS Prismic as data source. The website is hosted on Netlify and is viewable
          {" "}<a className={pbwLink} href="https://palmerabytes.com/">here</a>.
        </p>
      </div>
    </section>
  );
};

export default experienceTwo;