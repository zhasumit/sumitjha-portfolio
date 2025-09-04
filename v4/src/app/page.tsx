// app/page.tsx (Server Component)
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import TechStacks from "@/components/TechStacks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 sm:p-12 flex flex-col items-center">
      <main className="flex flex-col items-center sm:items-start w-full gap-2 flex-grow">
        {/* TODO main elements*/}
        <Hero />
        <Experience />
        <TechStacks />
      </main>
      <footer className="w-full flex flex-wrap items-center justify-center gap-6 py-6">
        {/* TODO footer */}
      </footer>
    </div>
  );
}
