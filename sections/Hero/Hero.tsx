"use client";

import { useState } from "react";
import Skills from "../Skills/Skills";
import styles from "./Hero.module.css";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <section className={styles.hero} onMouseMove={handleMouseMove}>
      <div className={styles.background} />

      <div
        className={styles.left}
        style={{
          textShadow: `
            ${-(mousePos.x - window.innerWidth / 2) / 30}px 
            ${-(mousePos.y - window.innerHeight / 2) / 30}px 
            20px rgba(133, 79, 108, 0.6),
            0 0 25px rgba(56, 189, 248, 0.4),
            0 0 35px rgba(223, 182, 178, 0.3)
          `,
        }}
      >
        <p className={styles.intro}>Hello, I am</p>
        <h1 className={styles.title}>Anastasiia Totska</h1>
        <h2 className={styles.role}>Frontend Developer</h2>
        <p className={styles.description}>
          Junior Frontend Developer creating modern, responsive web experiences.
          Always eager to learn and improve.
        </p>
      </div>

      <Skills />
    </section>
  );
}
