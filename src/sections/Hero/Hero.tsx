import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLinkedin,
  IconBrandReact,
  IconBrandTypescript,
  IconMail,
} from "@tabler/icons-react";
import styles from "./Hero.module.css";
import { IconBrandNodejs } from "@tabler/icons-react";
import { IconBrandRedux } from "@tabler/icons-react";
function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["hero-info"]}>
          <h1>FRONTEND</h1>
          <hr />
          <div className={styles["hero-sub-container"]}>
            <h2>
              Hi all <br /> I&apos;m Danilo
            </h2>
            <p>
              I&apos;m a Web Developer specializing in JavaScript, TypeScript,
              React, Node.js, Firebase, Stripe, and cloud platforms like Azure
              and AWS. With a knack for seamless UI/UX and mobile app
              development using React Native, I transform ideas into captivating
              digital solutions. Let&apos;s collaborate and bring your vision to
              life.
            </p>
          </div>

          <hr />
          <h1>DEVELOPER</h1>
        </div>

        <div className={styles["contact-icons"]}>
          <a
            href="https://www.linkedin.com/in/danilo-pro/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconBrandLinkedin size={50} />
          </a>

          <a href="mailto:rodez.business@gmail.com">
            <IconMail size={50} />
          </a>

          <a
            href="https://github.com/Rodez97"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconBrandGithub size={50} />
          </a>
        </div>

        <div className={styles["hero-icons"]}>
          <IconBrandReact size={40} />
          <IconBrandTypescript size={40} />
          <IconBrandJavascript size={40} />
          <IconBrandHtml5 size={40} />
          <IconBrandCss3 size={40} />
          <IconBrandNodejs size={40} />
          <IconBrandRedux size={40} />
          <IconBrandGit size={40} />
          <IconBrandGithub size={40} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
