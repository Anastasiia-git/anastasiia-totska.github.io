"use client";

import dynamic from "next/dynamic";
import styles from "./Skills.module.css";
import { line2Items } from "../../data/skillsData";
import { useLanguage } from "@/contexts/LanguageContext";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

export default function Skills() {
  const { t } = useLanguage();
  const line1Items = [...t.hero.skills, ...t.hero.skills];

  return (
    <section className={styles.skillsContainer}>
      <Marquee
        speed={40}
        gradient={false}
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
        gradient={false}
        pauseOnHover={true}
      >
        {line2Items.map((item, i) => (
          <div key={`line2-${i}`} className={styles.skillBox}>
            {item.icon ? (
              <i className={`${item.icon} ${styles.skillIcon}`} aria-hidden />
            ) : (
              <span className={styles.fallbackIcon} aria-hidden>
                {item.fallbackIcon}
              </span>
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
