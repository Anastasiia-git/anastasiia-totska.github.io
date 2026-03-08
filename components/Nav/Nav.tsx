"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

interface NavProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Nav({ open, setOpen }: NavProps) {
  const [active, setActive] = useState("about");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <nav ref={navRef} className={`${styles.nav} ${open ? styles.open : ""}`}>
      <a
        className={active === "about" ? styles.active : ""}
        onClick={() => scrollToSection("about")}
      >
        About
      </a>
      <a
        className={active === "projects" ? styles.active : ""}
        onClick={() => scrollToSection("projects")}
      >
        Projects
      </a>
      <a
        className={active === "contact" ? styles.active : ""}
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </a>
    </nav>
  );
}
