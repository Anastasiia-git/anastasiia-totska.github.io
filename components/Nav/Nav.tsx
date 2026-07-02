"use client";

import styles from "./Nav.module.css";

const links = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const menuCloseDelay = 80;

interface NavProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  activeSection: string;
}

export default function Nav({ open, setOpen, activeSection }: NavProps) {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    setOpen(false);

    if (section) {
      window.setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, menuCloseDelay);
    }
  };

  return (
    <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={activeSection === link.id ? styles.active : ""}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection(link.id);
          }}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
}
