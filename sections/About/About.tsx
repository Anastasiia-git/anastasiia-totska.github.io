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
import { useLanguage } from "@/contexts/LanguageContext";

const factIcons = [Layers, Target, GraduationCap];

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
  const { language, t, cvHref } = useLanguage();

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
            <p className={styles.subtitle}>{t.about.eyebrow}</p>

            <h2 className={styles.title}>
              {t.about.title}
            </h2>

            <p className={styles.role}>
              <strong>Anastasiia Totska</strong> · {t.about.role}
            </p>

            <p className={styles.lead}>
              {t.about.lead}
            </p>

            <motion.div className={styles.facts} variants={sectionItemVariants}>
              {t.about.facts.map(({ label, value }, index) => {
                const Icon = factIcons[index];

                return (
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
                );
              })}
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
                {t.about.certification}
              </p>

              <h3>{t.about.certificateTitle}</h3>

              <p>{t.about.certificateMeta}</p>
              <p>{t.about.certificateStack}</p>
            </div>

            <div className={styles.certificateImage}>
              <Image
                src="/certificate.webp"
                alt={t.about.certificateAlt}
                fill
                sizes="(max-width: 767px) 100vw, 420px"
              />
            </div>
          </motion.aside>

          <motion.div className={styles.skillsCard} variants={sectionItemVariants}>
            <div className={styles.sectionTitle}>
              <Puzzle aria-hidden="true" size={28} strokeWidth={1.8} />
              <h3>{t.about.practicalSkills}</h3>
            </div>

            <div className={styles.abilityList}>
              {t.about.abilities.map((item) => (
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
              <h3>{t.about.goalTitle}</h3>
              <p className={styles.text}>{t.about.goal}</p>
            </div>

            <div className={styles.btnBox}>
              <a
                href={cvHref}
                download
                className={styles.button}
                aria-label={`${t.about.downloadCv} ${language.toUpperCase()}`}
              >
                <FileText aria-hidden="true" size={22} strokeWidth={1.8} />
                {t.about.downloadCv} · {language.toUpperCase()}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
