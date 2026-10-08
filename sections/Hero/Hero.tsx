"use client";

import Image from "next/image";
import Skills from "../Skills/Skills";
import styles from "./Hero.module.css";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background} />

      <div className={styles.heroContent}>
        <div className={styles.left}>
          <p className={styles.intro}>{t.hero.intro}</p>
          <h1 className={styles.title}>
            <span>Anastasiia</span>
            <span>Totska</span>
          </h1>
          <h2 className={styles.role}>{t.hero.role}</h2>
          <p className={styles.description}>{t.hero.description}</p>
        </div>

        <div className={styles.portraitWrap}>
          <Image
            src="/avatar1.webp"
            alt={t.hero.portraitAlt}
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
