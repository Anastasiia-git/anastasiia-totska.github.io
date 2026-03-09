"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./Header.module.css";
import Nav from "../../components/Nav/Nav";

const sections = ["home", "about", "projects", "contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) current = sectionId;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo} onClick={scrollToTop}>
          <Image src="/favicon.svg" alt="AT logo" width={36} height={36} />
          <span className={styles.logoText}>
            <span
              className={`${styles.tag} ${
                activeSection === "home" ? styles.active : ""
              }`}
            >
              &lt;
            </span>
            <span className={styles.innerDev}>dev</span>
            <span
              className={`${styles.tag} ${
                activeSection === "home" ? styles.active : ""
              }`}
            >
              /&gt;
            </span>
          </span>
        </div>

        <Nav open={open} setOpen={setOpen} activeSection={activeSection} />

        <div className={styles.burger}>
          <Hamburger toggled={open} toggle={setOpen} size={22} />
        </div>

        {open && (
          <div className={styles.overlay} onClick={() => setOpen(false)} />
        )}
      </header>
    </>
  );
}
