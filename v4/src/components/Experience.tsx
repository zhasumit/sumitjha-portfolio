import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

// ✅ Define valid highlight color constants
export const HIGHLIGHTS = {
    SLATE: "slate-highlight",
    GRAY: "gray-highlight",
    ZINC: "zinc-highlight",
    NEUTRAL: "neutral-highlight",
    STONE: "stone-highlight",
    RED: "red-highlight",
    ORANGE: "orange-highlight",
    AMBER: "amber-highlight",
    YELLOW: "yellow-highlight",
    LIME: "lime-highlight",
    GREEN: "green-highlight",
    EMERALD: "emerald-highlight",
    TEAL: "teal-highlight",
    CYAN: "cyan-highlight",
    SKY: "sky-highlight",
    BLUE: "blue-highlight",
    INDIGO: "indigo-highlight",
    VIOLET: "violet-highlight",
    PURPLE: "purple-highlight",
    FUCHSIA: "fuchsia-highlight",
    PINK: "pink-highlight",
    ROSE: "rose-highlight",
} as const;

// ✅ Restrict type to only valid highlight keys
export type HighlightColor = (typeof HIGHLIGHTS)[keyof typeof HIGHLIGHTS];

interface Project {
    title: string;
    highlightColor: HighlightColor;
    description: string;
    points: string[];
}

interface ExperienceData {
    company: {
        name: string;
        logo: string;
        location: string;
        role: string;
        period: string;
    };
    projects: Project[];
}

const experienceData: ExperienceData = {
    company: {
        name: "Prismberry",
        logo: "/companies/prismberry.png",
        location: "Noida, UP, India",
        role: "Software Developer Engineer",
        period: "Jan 2025 – Present",
    },
    projects: [
        {
            title: "Taxspanner",
            highlightColor: HIGHLIGHTS.SKY,
            description:
                "Tax compliance platform for digital filing of TDS, GST, and income tax returns.",
            points: [
                "Designed and implemented core user workflows using Django, DRF, and Next.js (v13-15)",
                "Ensured faster navigation & smoother filing for 500+ users for ITR-1 & ITR-4.",
                "Built 30+ reusable UI components, boosting design consistency and cutting new feature dev time by ~25%.",
                "Optimized backend queries and caching, reducing API response times by 30% and improving overall platform speed.",
                "Contributed to improved user experience, leading to a 20% increase in feature adoption within 3 months.",
            ],
        },
        {
            title: "Propel",
            highlightColor: HIGHLIGHTS.RED,
            description:
                "Business management platform for operations, finance, and team collaboration.",
            points: [
                "Developed dynamic financial and operational report UIs using ERB, improving data readability for 500+ business users.",
                "Wrote backend data parsers in Ruby to automate report generation, cutting manual effort by 40%.",
                "Enhanced scalability of card management and transaction workflows with Rails + PostgreSQL optimizations.",
                "Collaborated with cross-functional teams to streamline workflows, reducing reporting delays by ~35%.",
            ],
        },
    ],
};

const Experience = () => {
    return (
        <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex gap-1">
                Experience
            </h2>

            <ul className="relative border-l-2 border-primary/30 pl-2">
                <li className="ml-4">
                    {/* Timeline node */}
                    <div className="absolute w-5 h-5 bg-primary rounded-full -left-2.5 -top-1 border-2 border-primary-content"></div>

                    {/* Period */}
                    <time className="block mt-1 mb-1 text-sm font-semibold text-primary">
                        {experienceData.company.period}
                    </time>

                    {/* Company */}
                    <div className="text-2xl font-bold flex items-center gap-2 mb-2">
                        <Image
                            src={experienceData.company.logo}
                            alt={`${experienceData.company.name} Logo`}
                            width={28}
                            height={28}
                            className="w-7 h-7 md:w-8 md:h-8"
                        />
                        {experienceData.company.name}
                    </div>

                    {/* Location */}
                    <div className="text-sm text-gray-500 flex items-center mb-1">
                        <MapPin size={14} className="mr-1 text-red-300" />
                        {experienceData.company.location}
                    </div>

                    {/* Role */}
                    <div className="font-semibold text-lg mb-2">
                        {experienceData.company.role}
                    </div>

                    {/* Projects */}
                    <ul className="list-disc list-inside leading-tight space-y-4 mt-2">
                        {experienceData.projects.map((proj, i) => (
                            <li key={i} className="text-base">
                                <span
                                    className={`font-semibold text-xl ${proj.highlightColor}`}
                                >
                                    {proj.title}
                                </span>
                                <span className="text-lg leading-tight">
                                    {" "}
                                    – {proj.description}
                                </span>

                                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 md:space-y-0.5 text-base md:text-lg">
                                    {proj.points.map((point, j) => (
                                        <li key={j}>{point}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Experience;
