import Image from "next/image";
import Skills from "../Skills/Skills";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background} />

      <div className={styles.heroContent}>
        <div className={styles.left}>
          <p className={styles.intro}>Hello, I am</p>
          <h1 className={styles.title}>
            <span>Anastasiia</span>
            <span>Totska</span>
          </h1>
          <h2 className={styles.role}>Frontend Developer</h2>
          <p className={styles.description}>
            Junior frontend developer turning product ideas into polished,
            accessible React and Next.js experiences.
          </p>
        </div>

        <div className={styles.portraitWrap}>
          <Image
            src="/avatar1.webp"
            alt="Anastasiia Totska"
            fill
            priority
            sizes="(max-width: 767px) 72vw, (max-width: 1023px) 320px, 380px"
            className={styles.portrait}
          />
        </div>
      </div>

      <Skills />
    </section>
  );
}
