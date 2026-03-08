"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./Header.module.css";
import Nav from "../../components/Nav/Nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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
            <span className={styles.tag}>&lt;</span>
            <span className={styles.innerDev}>dev</span>
            <span className={styles.tag}>/&gt;</span>
          </span>
        </div>

        <Nav open={open} setOpen={setOpen} />

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
