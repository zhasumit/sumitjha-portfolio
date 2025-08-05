"use client";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import TechStackCard from "./TechStackCard";

const TechStacks = () => {
    const techs = [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Python", icon: FaPython },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
    ];

    return (
        <div className="p-10 flex justify-center items-center">
            <TechStackCard title="My Tech Stack" techs={techs} />
        </div>
    );
};

export default TechStacks;
