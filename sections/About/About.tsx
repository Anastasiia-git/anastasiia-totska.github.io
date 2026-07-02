"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Layers,
  Target,
  GraduationCap,
  Puzzle,
  CheckCircle2,
  FileText,
  ShieldCheck,
} from "lucide-react";
import styles from "./About.module.css";
import { abilityItems } from "@/data/profileData";

const facts = [
  {
    icon: Layers,
    label: "Main stack",
    value: "React · Next.js · TypeScript",
  },
  {
    icon: Target,
    label: "Focus",
    value: "Responsive frontend",
  },
  {
    icon: GraduationCap,
    label: "Training",
    value: "872h full-stack course",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.layout}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.main}>
            <p className={styles.subtitle}>ABOUT ME</p>

            <h2 className={styles.title}>
              Frontend developer focused on clean React interfaces
            </h2>

            <p className={styles.role}>
              <strong>Anastasiia Totska</strong> · Junior Frontend Developer
            </p>

            <p className={styles.lead}>
              I build responsive UI with React, Next.js and TypeScript, connect
              REST APIs, handle UI states and prepare projects for deployment.
            </p>

            <div className={styles.facts}>
              {facts.map(({ icon: Icon, label, value }) => (
                <div className={styles.factItem} key={label}>
                  <Icon aria-hidden="true" size={34} strokeWidth={1.8} />
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.aside
            className={styles.certificateCard}
            whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className={styles.certificateText}>
              <p className={styles.certificateLabel}>
                <ShieldCheck aria-hidden="true" size={20} strokeWidth={1.8} />
                Certification
              </p>

              <h3>Fullstack Developer Course</h3>

              <p>GoIT · May 2026 · 872 hours</p>
              <p>HTML/CSS · JavaScript · React · Next.js · Node.js</p>
            </div>

            <div className={styles.certificateImage}>
              <Image
                src="/certificate.webp"
                alt="GoIT Fullstack Developer Course certificate"
                fill
                sizes="(max-width: 767px) 100vw, 420px"
              />
            </div>
          </motion.aside>

          <div className={styles.skillsCard}>
            <div className={styles.sectionTitle}>
              <Puzzle aria-hidden="true" size={28} strokeWidth={1.8} />
              <h3>Practical skills</h3>
            </div>

            <div className={styles.abilityList}>
              {abilityItems.map((item) => (
                <span key={item}>
                  <CheckCircle2 aria-hidden="true" size={18} strokeWidth={2} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.goalCard}>
            <div className={styles.goalIcon}>
              <Target aria-hidden="true" size={34} strokeWidth={1.8} />
            </div>

            <div className={styles.goalText}>
              <h3>Current goal</h3>
              <p className={styles.text}>
                I am looking for a junior frontend role where I can contribute
                to real product features, write maintainable code and learn from
                an experienced team.
              </p>
            </div>

            <div className={styles.btnBox}>
              <a
                href="/cv/CV_Anastasiia_Totska_de.pdf"
                download
                className={styles.button}
              >
                <FileText aria-hidden="true" size={22} strokeWidth={1.8} />
                Download CV DE
              </a>

              <a
                href="/cv/CV_Anastasiia_Totska_en.pdf"
                download
                className={styles.buttonSecondary}
              >
                <FileText aria-hidden="true" size={22} strokeWidth={1.8} />
                Download CV EN
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
