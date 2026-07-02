import styles from "./Contact.module.css";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nastya.totskaya1997@gmail.com",
    ariaLabel: "Send email to nastya.totskaya1997@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anastasiia-totska-53a76b3a8/",
    ariaLabel: "Open LinkedIn",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Anastasiia-git",
    ariaLabel: "Open GitHub",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/491627686705?text=Hello%20Anastasiia",
    ariaLabel: "Open WhatsApp",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.subtitle}>CONTACT</p>
        <div className={styles.header}>
          <h2 className={styles.title}>Get in touch</h2>
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
