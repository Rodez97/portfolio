import styles from "./Hero.module.css";
import data from "../../data";
function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["hero-info"]}>
          <h1>{data.heroTitle1}</h1>
          <hr />
          <div className={styles["hero-sub-container"]}>
            <h2>{data.heroSubtitle}</h2>
            <p>{data.heroDescription}</p>
          </div>

          <hr />
          <h1>{data.heroTitle2}</h1>
        </div>

        <div className={styles["contact-icons"]}>
          {data.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className={styles["hero-icons"]}>{data.stackIcons}</div>
      </div>
    </section>
  );
}

export default Hero;
