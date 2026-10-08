"use client";

import styles from "./Contact.module.css";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const contacts = [
    { icon: Mail, label: "Email", href: "mailto:anastasiia.totska011@gmail.com", ariaLabel: t.contact.email },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anastasiia-totska-53a76b3a8/", ariaLabel: t.contact.linkedin },
    { icon: Github, label: "GitHub", href: "https://github.com/Anastasiia-git", ariaLabel: t.contact.github },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/491627686705?text=Hello%20Anastasiia", ariaLabel: t.contact.whatsapp },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.subtitle}>{t.contact.eyebrow}</p>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.contact.title}</h2>
        </div>

        <div className={styles.grid}>
          {contacts.map((item) => {
            const Icon = item.icon;
            const isExternal = item.href.startsWith("http");

            return (
              <a
                key={item.label}
                href={item.href}
                className={styles.card}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={item.ariaLabel}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={28} className={styles.icon} />
                  <p className={styles.cardTitle}>{item.label}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
