import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.intro}>Hello, I am</p>
        <h1 className={styles.title}>Anastasiia Totska</h1>
        <h2 className={styles.role}>Frontend Developer</h2>
        <p className={styles.description}>
          I build modern web applications using React and Next.js.
        </p>

        <div className={styles.buttons}>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className={styles.right}>
        <Image
          src="/avatar.png"
          alt="Anastasiia Totska"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
