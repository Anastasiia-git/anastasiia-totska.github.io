"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm("service_id", "template_id", form.current, "public_key");

    alert("Message sent!");

    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <input type="text" name="name" placeholder="Your name" required />

      <input type="email" name="email" placeholder="Your email" required />

      <textarea name="message" placeholder="Message" required />

      <button type="submit">Send message</button>
    </form>
  );
}
