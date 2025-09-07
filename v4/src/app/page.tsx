// app/page.tsx (Server Component)
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import TechStacks from "@/components/TechStacks";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <main className="w-full max-w-6xl flex flex-col items-center sm:items-start gap-6 flex-grow space-y-14">
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
