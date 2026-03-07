import Image from "next/image";
import styles from "./Hero.module.css";

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
      </div>

      <div className={styles.right}>
        <div className={styles.avatarWrapper}>
          <Image
            src="/avatar.png"
            alt="Anastasiia Totska"
            priority
            className={styles.avatar}
            width={280}
            height={280}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
