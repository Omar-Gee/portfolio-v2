import React from 'react';
import { container, leftContent, rightContent, title, subTitle, text, image} from "./intro.module.scss"

const intro = () => {
  return (
    <section className={container}>
      <div className={leftContent}>
        <h1 className={title}>Omar Geerman</h1>
        <h4 className={subTitle}>JAM-stack Developer</h4>
        <p className={text}>
          I am a self taught developer with 2 years of experience.
          During this period I had the awesome opportunity to learn about
          some of the most exciting tools and frameworks for web development.
        </p>
      </div>
      <div className={rightContent}>
        <img className={image} src="https://images.pexels.com/photos/7369/startup-photos.jpg" />
      </div>

    </section>
  );
};

export default intro;