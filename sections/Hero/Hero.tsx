"use client";

import Skills from "../Skills/Skills";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />

      <div className={styles.left}>
        <p className={styles.intro}>Hello, I am</p>
        <h1 className={styles.title}>Anastasiia Totska</h1>
        <h2 className={styles.role}>Frontend Developer</h2>
        <p className={styles.description}>
          Frontend-focused junior developer with a full-stack development
          certificate, building responsive React and Next.js interfaces.
        </p>
      </div>
      <Skills />
    </section>
  );
}
