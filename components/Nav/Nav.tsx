"use client";

import { useEffect, useRef } from "react";
import styles from "./Nav.module.css";

interface NavProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  activeSection: string;
}

export default function Nav({ open, setOpen, activeSection }: NavProps) {
  const navRef = useRef<HTMLDivElement>(null);

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

  const links = [
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav ref={navRef} className={`${styles.nav} ${open ? styles.open : ""}`}>
      {links.map((link) => (
        <a
          key={link.id}
          className={activeSection === link.id ? styles.active : ""}
          onClick={() => scrollToSection(link.id)}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
}
