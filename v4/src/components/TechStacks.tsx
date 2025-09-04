// components/TechStacks.tsx (Server Component)
import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function TechStacks() {
    return (
        <div className="p-4 md:p-8 -mt-5">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
                Tech stack
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project, i) => (
                    <div key={i} className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%]">
                        <ProjectCard
                            project={{
                                ...project,
                                technologies: project.technologies.map((tech: any) => ({
                                    ...tech,
                                    iconName: tech.icon,
                                })),
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
