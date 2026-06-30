import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { siteConfig } from "@/lib/data";
import { fetchGitHubRepos } from "@/lib/github";

export default async function Home() {
  const projects = await fetchGitHubRepos(siteConfig.github);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
