"use client";

import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Contact.module.css";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    link: "nastya.totskaya1997@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/anastasiia-totskaya/",
  },
  {
    icon: Github,
    title: "GitHub",
    link: "https://github.com/Anastasiia-git",
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
  const handleCopyEmail = (email: string) => {
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
          {contacts.map((itemData, index) => {
            const Icon = itemData.icon;

            return (
              <motion.div key={index} className={styles.card}>
                {itemData.title === "Email" ? (
                  <>
                    <a
                      href={`mailto:${itemData.link}`}
                      target="_blank"
                      className={styles.iconWrapper}
                    >
                      <Icon size={28} className={styles.icon} />
                    </a>
                    <p
                      className={styles.cardTitle}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCopyEmail(itemData.link)}
                    >
                      {itemData.link}
                    </p>
                  </>
                ) : (
                  <a
                    href={itemData.link}
                    target="_blank"
                    className={styles.iconWrapper}
                  >
                    <Icon size={28} className={styles.icon} />
                    <p className={styles.cardTitle}>{itemData.title}</p>
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </section>
  );
}
