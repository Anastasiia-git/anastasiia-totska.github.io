"use client";

import dynamic from "next/dynamic";
import styles from "./Skills.module.css";

// Динамічний імпорт без SSR
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const line1Items = [
  "Frontend Developer",
  "Web Applications",
  "Clean Code",
  "Responsive Design",
  "UI/UX",
  "Modern Interfaces",
  "Frontend Developer",
  "Web Applications",
  "Clean Code",
  "Responsive Design",
  "UI/UX",
  "Modern Interfaces",
];

const line2Items = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Git",
  "GitHub",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section className={styles.skillsContainer}>
      <Marquee
        speed={40}
        gradient={true}
        gradientColor="#190019" /* Колір твоєї палітри */
        gradientWidth={50}
        pauseOnHover={true}
      >
        {line1Items.map((item, i) => (
          <div key={`line1-${i}`} className={styles.skillBox}>
            {item}
          </div>
        ))}
      </Marquee>

      <Marquee
        speed={35}
        direction="right"
        gradient={true}
        gradientColor="#190019"
        gradientWidth={50}
        pauseOnHover={true}
      >
        {line2Items.map((item, i) => (
          <div key={`line2-${i}`} className={styles.skillBox}>
            {item}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
