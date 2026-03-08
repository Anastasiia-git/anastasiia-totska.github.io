"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";
import styles from "./Skills.module.css";

const line1Items = [
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
  "Framer Motion",
];

export default function Skills() {
  const [hoveredIndex1, setHoveredIndex1] = useState<number | null>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);

  return (
    <section className={styles.skillsContainer}>
      <Marquee
        className={styles.marquee}
        gradient={false}
        speed={40}
        pauseOnHover
      >
        {line1Items.map((item, i) => (
          <div
            key={i}
            className={`${styles.skillBox} ${
              hoveredIndex1 === i ? styles.active : ""
            }`}
            onMouseEnter={() => setHoveredIndex1(i)}
            onMouseLeave={() => setHoveredIndex1(null)}
          >
            {item}
          </div>
        ))}
      </Marquee>

      <Marquee
        className={styles.marqueeReverse}
        gradient={false}
        speed={30}
        direction="right"
        pauseOnHover
      >
        {line2Items.map((item, i) => (
          <div
            key={i}
            className={`${styles.skillBox} ${
              hoveredIndex2 === i ? styles.active : ""
            }`}
            onMouseEnter={() => setHoveredIndex2(i)}
            onMouseLeave={() => setHoveredIndex2(null)}
          >
            {item}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
