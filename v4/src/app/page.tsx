// app/page.tsx (Server Component)
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import TechStacks from "@/components/TechStacks";
import Projects from "@/components/Projects";
import Image from "next/image";
import Education from "@/components/Education";
import About from "@/components/About";
import Sidequests from "@/components/Sidequests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="px-6 sm:px-12 flex flex-col items-center">
      <main className="flex flex-col items-center sm:items-start w-full gap-6 flex-grow space-y-14">
        {/* TODO main elements*/}
        <Hero />
        <Experience />
        <TechStacks />
        <Projects />
        <About />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
