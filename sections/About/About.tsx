"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.photoWrapper}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.photoBorder}>
            <Image
              src="/avatar1.webp"
              alt="Anastasiia Totska"
              fill
              sizes="(max-width: 767px) 240px, (max-width: 1023px) 280px, 320px"
              className={styles.photo}
            />
          </div>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className={styles.subtitle}>ABOUT ME</p>

          <h2 className={styles.title}>Anastasiia Totska</h2>

          <p className={styles.role}>
            Frontend Developer | Full-Stack Certified
          </p>

          <p className={styles.text}>
            I am a frontend-focused Junior Developer with a full-stack
            development certificate. I enjoy turning UI designs into responsive
            React interfaces and understanding how the frontend connects with
            APIs, data, and real user workflows.
          </p>

          <div className={styles.btnBox}>
            <a
              href="/cv/CV_Anastasiia_Totska_de.pdf"
              download
              className={styles.button}
            >
              Download CV de
            </a>
            <a
              href="/cv/CV_Anastasiia_Totska_en.pdf"
              download
              className={styles.button}
            >
              Download CV en
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
