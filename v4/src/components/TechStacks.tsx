import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function TechStacks() {
    return (
        <div className="p-2 -mt-5">
            <h2 className="text-2xl md:text-3xl font-bold my-4 ml-6.5">
                Tech stack
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
                some tech stacks
            </div>
        </div>
    );
}
