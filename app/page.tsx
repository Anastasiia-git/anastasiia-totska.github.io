import About from "@/sections/About/About";
import Contact from "@/sections/Contact/Contact";
import Header from "@/sections/Header/Header";
import Hero from "@/sections/Hero/Hero";
import Projects from "@/sections/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
