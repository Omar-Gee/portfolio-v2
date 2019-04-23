import React from 'react';

import bdclogo from "../../images/bdc-text.png"
import { container, title, list, listItem, text, leftContent, rightContent, image } from "./experience.module.scss"

const experienceOne = () => {
  return (
    <section className={container} id="experience">
      <div className={leftContent}>
        <h1 className={title}>Brazil Dental Care</h1>
        <ul className={list}>
          <li className={listItem}>React</li>
          <li className={listItem}>Bootstrap</li>
          <li className={listItem}>Nodejs</li>
          <li className={listItem}>Expressjs</li>
          <li className={listItem}>Passportjs</li>
          <li className={listItem}>Mongoose</li>
          <li className={listItem}>MongoDB</li>
        </ul>
        <p className={text}>
          An appointment
          system for a dentistry. The front end was
          primarily build with React and Bootstrap. The back end
          was developed in Node.js using Express.js with MongoDB as
          the database. I played a role both in the front and
          backend development.
        </p>
      </div>
      <div className={rightContent}>
        <img className={image} src={bdclogo} alt="BDC" />
      </div>

    </section>
  );
};

export default experienceOne;