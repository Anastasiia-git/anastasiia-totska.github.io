"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
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

const layoutVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const sectionItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const factVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.layout}
          initial="hidden"
          whileInView="visible"
          variants={layoutVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className={styles.main} variants={sectionItemVariants}>
            <p className={styles.subtitle}>ABOUT ME</p>

            <h2 className={styles.title}>
              Frontend developer focused on clean React interfaces
            </h2>

            <p className={styles.role}>
              <strong>Anastasiia Totska</strong> · Junior Frontend Developer
            </p>

            <p className={styles.lead}>
              I care about interfaces that feel clear to use and simple to
              maintain: typed components, thoughtful states, API integration,
              and production-ready delivery.
            </p>

            <motion.div className={styles.facts} variants={sectionItemVariants}>
              {facts.map(({ icon: Icon, label, value }) => (
                <motion.div
                  className={styles.factItem}
                  key={label}
                  variants={factVariants}
                >
                  <Icon aria-hidden="true" size={34} strokeWidth={1.8} />
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            className={styles.certificateCard}
            variants={sectionItemVariants}
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

          <motion.div className={styles.skillsCard} variants={sectionItemVariants}>
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
          </motion.div>

          <motion.div className={styles.goalCard} variants={sectionItemVariants}>
            <div className={styles.goalIcon}>
              <Target aria-hidden="true" size={34} strokeWidth={1.8} />
            </div>

            <div className={styles.goalText}>
              <h3>Current goal</h3>
              <p className={styles.text}>
                I am looking for a junior frontend role where I can contribute
                to product features, improve with code review, and grow inside
                an experienced engineering team.
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
