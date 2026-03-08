"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Image src="/favicon.svg" alt="AT logo" width={36} height={36} />
  <span className={styles.logoText}>
    <span className={styles.tag}>&lt;</span>
    <span className={styles.innerDev}>dev</span>
    <span className={styles.tag}>/&gt;</span>
  </span>
      </div>

      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}
