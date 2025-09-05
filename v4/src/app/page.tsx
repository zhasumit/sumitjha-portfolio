// app/page.tsx (Server Component)
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import TechStacks from "@/components/TechStacks";
import Projects from "@/components/Projects";
import Image from "next/image";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="px-6 sm:px-12 flex flex-col items-center">
      <main className="flex flex-col items-center sm:items-start w-full gap-6 flex-grow">
        {/* TODO main elements*/}
        <Hero />
        <Experience />
        <TechStacks />
        <Projects />
        <Education />
      </main>
      <footer className="w-full flex flex-wrap items-center justify-center gap-6 py-6">
        {/* TODO footer */}
      </footer>
    </div>
  );
}
