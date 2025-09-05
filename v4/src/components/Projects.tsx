import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="p-2 -mt-5">
            <h2 className="text-3xl md:text-4xl font-bold my-4 ml-6.5">
                Projects
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
