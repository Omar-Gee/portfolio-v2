import React from 'react';

import { container, mainTitle, title, list, listItem, skillGroup, middleGroup, groupContainer } from "./skills.module.scss"

const skills = () => {
  return (
    <section className={container}>
      <div className={groupContainer}>
        <div className={skillGroup}>
          <h2 className={title}>Front-end</h2>
          <ul className={list}>
            <li className={listItem}>React</li>
            <li className={listItem}>Styled Components</li>
            <li className={listItem}>Gatsby</li>
            <li className={listItem}>Bootstrap</li>
            <li className={listItem}>HTML 5</li>
            <li className={listItem}>CSS 3</li>
          </ul>
        </div>
        <div className={middleGroup}>
          <h2 className={title}>Back-end</h2>
          <ul className={list}>
            <li className={listItem}>Nodejs</li>
            <li className={listItem}>Expressjs</li>
            <li className={listItem}>MongoDB</li>
            <li className={listItem}>Postgres</li>
            <li className={listItem}>Spring Boot</li>
            <li className={listItem}>Authentication & Authorization</li>
          </ul>
        </div>
        <div className={skillGroup}>
          <h2 className={title}>Tools</h2>
          <ul className={list}>
            <li className={listItem}>Jira</li>
            <li className={listItem}>SCRUM</li>
            <li className={listItem}>Git</li>
            <li className={listItem}>Postman</li>
            <li className={listItem}>Swagger</li>
            <li className={listItem}>CMS</li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default skills;