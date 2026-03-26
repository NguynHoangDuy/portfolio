import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Expertise />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
