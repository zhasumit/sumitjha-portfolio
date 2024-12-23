import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";
import Home from "~/components/home";
import Projects from "~/components/projects";
import TechStack from "~/components/tech-stack";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <Home />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}

