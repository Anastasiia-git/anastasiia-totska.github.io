"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { abilityItems, qualityItems } from "@/data/profileData";

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

          <div className={styles.certificateBlock}>
            <div className={styles.certificateText}>
              <p className={styles.certificateLabel}>Certification</p>
              <h3>Fullstack Developer Course</h3>
              <p>
                GoIT, May 2026 · 872 hours · HTML/CSS, JavaScript, React,
                Next.js, Node.js
              </p>
            </div>

            <div className={styles.certificateImage}>
              <Image
                src="/certificate.webp"
                alt="GoIT Fullstack Developer Course certificate"
                fill
                sizes="(max-width: 767px) 100vw, 420px"
              />
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h3>What I can do</h3>
            <div className={styles.abilityList}>
              {abilityItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h3>Looking for</h3>
            <p className={styles.text}>
              A Junior Frontend Developer role where I can build React and
              Next.js interfaces, work with APIs, write clean TypeScript, and
              grow in a product-focused team.
            </p>
          </div>

          <div className={styles.qualityList}>
            {qualityItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

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
