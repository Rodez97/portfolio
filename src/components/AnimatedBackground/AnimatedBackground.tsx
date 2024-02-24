import styles from "./AnimatedBackground.module.css";

function AnimatedBackground() {
  return (
    <div className={styles.container}>
      <div className={`${styles.light} ${styles.x1} animate-bar`}></div>
      <div className={`${styles.light} ${styles.x2} animate-bar`}></div>
      <div className={`${styles.light} ${styles.x3} animate-bar`}></div>
      <div className={`${styles.light} ${styles.x4} animate-bar`}></div>
      <div className={`${styles.light} ${styles.x5} animate-bar`}></div>
      <div className={`${styles.light} ${styles.x6} animate-bar`}></div>
      <div className={`${styles.light} ${styles.x7} animate-bar`}></div>
      <div className={`${styles.light} ${styles.x8} animate-bar`}></div>
      <div className={`${styles.light} ${styles.x9} animate-bar`}></div>
    </div>
  );
}

export default AnimatedBackground;
