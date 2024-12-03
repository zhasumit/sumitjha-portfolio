import Title from '../components/title';
import React, { useState } from 'react';
import projects from '../data/projects.json';
import petprojects from '../data/petprojects.json';
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Sumit Jha - projects" },
    ];
};

interface TechStack {
    name: string;
    icon: string;
}

interface Project {
    name: string;
    image: string;
    description: string;
    github: string;
    live?: string;
    techstack: TechStack[];
}

const Projects: React.FC = () => {
    const [hoveredGithubIndex, setHoveredGithubIndex] = useState<number | null>(null);
    const [hoveredLiveIndex, setHoveredLiveIndex] = useState<number | null>(null);

    const handleGithubMouseEnter = (index: number) => setHoveredGithubIndex(index);
    const handleGithubMouseLeave = () => setHoveredGithubIndex(null);

    const handleLiveMouseEnter = (index: number) => setHoveredLiveIndex(index);
    const handleLiveMouseLeave = () => setHoveredLiveIndex(null);

    // Combine projects and pet projects
    const combinedProjects: { category: string; projects: Project[] }[] = [
        { category: 'Recent Projects', projects },
        { category: 'Pet Projects', projects: petprojects }
    ];

    return (
        <div className="mt-12 md:mt-8 mb-24 md:mb-28 px-4 lg:px-0">
            {combinedProjects.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <Title first={section.category.split(' ')[0]} second={section.category.split(' ')[1]} />
                    <br />
                    {section.projects.map((project, index) => (
                        <div className="flex flex-col md:flex-row gap-5 mb-16" key={index}>
                            {/* Project Image */}
                            <div className="projectImage w-full md:w-[300px] h-[170px] flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="rounded-lg h-full object-cover w-[300px] md:h-[170px]"
                                />
                            </div>

                            {/* Project Details */}
                            <div className="projectDetails flex flex-col justify-between w-full">
                                <div className="projectHeading flex items-center justify-between">
                                    <h3 className="font-semibold text-2xl md:text-3xl">{project.name}</h3>
                                    <div className="flex gap-6">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center hover:text-[#f46c38]"
                                                onMouseEnter={() => handleGithubMouseEnter(index)}
                                                onMouseLeave={handleGithubMouseLeave}
                                            >
                                                github
                                                <span
                                                    className={`inline-block transition-transform duration-200 p-1 ${hoveredGithubIndex === index
                                                        ? 'transform -translate-y-1 translate-x-1 font-extrabold'
                                                        : 'font-medium'
                                                        }`}
                                                >
                                                    ↗
                                                </span>
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center hover:text-[#f46c38]"
                                                onMouseEnter={() => handleLiveMouseEnter(index)}
                                                onMouseLeave={handleLiveMouseLeave}
                                            >
                                                live
                                                <span
                                                    className={`inline-block transition-transform duration-200 p-1 ${hoveredLiveIndex === index
                                                        ? 'transform -translate-y-1 translate-x-1 font-extrabold'
                                                        : 'font-medium'
                                                        }`}
                                                >
                                                    ↗
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="text-neutral-400 leading-tight tracking-tighter font-light">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.techstack.map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="flex items-center text-neutral-400 text-xs font-medium gap-1 p-1 rounded-md bg-zinc-800/50"
                                        >
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="w-4"
                                            />
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Projects;