import css from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        <Image
          src="/favicon.svg"
          alt="Anastasiia Totska logo"
          width={40}
          height={40}
          priority
        />
      </Link>
      <nav>
        <ul className={css.nav}>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
