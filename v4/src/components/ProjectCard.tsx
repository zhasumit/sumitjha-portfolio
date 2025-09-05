import React from "react";
import { Github, CalendarRange } from "lucide-react";
import { RiLinkUnlinkM } from "react-icons/ri";

export type Project = {
    title: string;
    description: string;
    image: string;
    technologies: {
        name: string;
        icon: string;
    }[];
    githubUrl?: string;
    liveUrl?: string;
    date: string;
    status: "Completed" | "In Progress" | "Planning" | string;
};

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    };

    const getStatusColor = (status: string): string => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-green-100 text-green-800 border-green-200";
            case "in progress":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "planning":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    return (
        <div className="max-w-sm h-full flex flex-col bg-base-100 border-base-300 text-base-content rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border hover:border-gray-200 group">
            {/* Image Section */}
            <div className="relative overflow-hidden">
                <img
                    src={project.image}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                    <span
                        className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                            project.status
                        )}`}
                    >
                        {project.status}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-1">
                {/* Title and Date */}
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-base-content leading-tight">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-secondary text-sm ml-2 whitespace-nowrap">
                        <CalendarRange size={14} />
                        <span className="mt-1">{formatDate(project.date)}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-base-content/80 text-base leading-tight mb-4 line-clamp-3 min-h-[60px]">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-5">
                    {project.technologies.map((tech, index) => (
                        <span key={index}>
                            <div className="badge rounded-xl bg-primary/10 inline-flex items-center py-3 select-none">
                                <img
                                    className="flex items-center justify-center size-3.5 border-none"
                                    src={tech.icon}
                                />
                                <span className="text-[13.5px] font-[500] text-base-content mt-0.5 -ml-1">{tech.name}</span>
                            </div>
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex gap-3 items-center rounded-lg">
                    {project.liveUrl &&
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-primary-content bg-primary/80 hover:bg-primary hover:bg-primary-focus rounded-lg transition-colors duration-200 group"
                        >
                            <RiLinkUnlinkM
                                size={16}
                                className="mr-1 transition-transform duration-200"
                            />
                            Live Demo
                        </a>
                    }
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-accent-content bg-accent/80 hover:bg-accent rounded-lg hover:bg-accent-focus transition-colors duration-200 group ${project.liveUrl ? "" : "w-full"
                            }`}
                    >
                        <Github
                            size={18}
                            className="mr-1 transition-transform duration-200"
                        />
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
}
