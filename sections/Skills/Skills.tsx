"use client";

import dynamic from "next/dynamic";
import styles from "./Skills.module.css";
import { line1Items, line2Items } from "./skillsData";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

export default function Skills() {
  return (
    <section className={styles.skillsContainer}>
      <Marquee
        speed={40}
        gradient={true}
        gradientColor="#190019"
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
