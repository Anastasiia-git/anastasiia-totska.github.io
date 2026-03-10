"use client";

import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Contact.module.css";
import { Mail, Github, Linkedin, Send, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    link: "nastya.totskaya1997@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/anastasiia-totska-53a76b3a8/",
  },
  {
    icon: Github,
    title: "GitHub",
    link: "https://github.com/Anastasiia-git",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    link: "https://wa.me/491627686705?text=Hello%20Anastasiia",
  },
  {
    icon: Send,
    title: "Telegram",
    link: "https://t.me/AT_dev1",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Contact() {
  const handleCopyEmail = (email: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    toast.success("Email copied!");
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>CONTACT</p>
          <h2 className={styles.title}>Get In Touch</h2>
        </div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className={styles.card}
                onClick={() => {
                  if (item.title === "Email") {
                    window.open(`mailto:${item.link}`);
                  } else {
                    window.open(item.link, "_blank");
                  }
                }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={28} className={styles.icon} />
                  {item.title === "Email" ? (
                    <p
                      className={styles.cardTitle}
                      style={{ cursor: "pointer" }}
                      onClick={(e) => handleCopyEmail(item.link, e)}
                    >
                      {item.link}
                    </p>
                  ) : (
                    <p className={styles.cardTitle}>{item.title}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </section>
  );
}
