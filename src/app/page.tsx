import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Recognition } from "@/components/Recognition";
import { CleanHashOnLoad } from "@/components/ScrollLink";
import { Skills } from "@/components/Skills";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <CleanHashOnLoad />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
