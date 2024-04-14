import styles from "./Hero.module.css";
import data from "../../data";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useLongPress } from "use-long-press";
function Hero() {
  const { md, sm } = useMediaQueries();
  const bind = useLongPress(() => {
    alert("Muchas gracias Clara por tu ayuda 😘");
  });
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["hero-info"]}>
          <h1 {...bind()}>{data.heroTitle1}</h1>
          <hr />
          <div className={styles["hero-sub-container"]}>
            <div>
              <h2>{data.heroSubtitle}</h2>
              <h2>Danilo</h2>
            </div>

            <p>{data.heroDescription}</p>
          </div>

          <hr />
          <h1>{data.heroTitle2}</h1>
        </div>

        <div className={styles["contact-icons"]}>
          {data.socials(sm ? 30 : md ? 40 : 50).map((social) => (
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

        <div className={styles["hero-icons"]}>
          {data.stackIcons(sm ? 25 : md ? 30 : 40)}
        </div>
      </div>
    </section>
  );
}

export default Hero;
