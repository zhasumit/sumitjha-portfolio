import React from "react";
import SkillCard, { Skill } from "./SkillCard";
import skillsData from "../data/skills.json";
import { PiToolboxDuotone } from "react-icons/pi";

const iconOverrides: { [key: string]: React.ReactNode } = {}

export default function ProjectCard() {
    const transformedSkills: Skill[] = skillsData.map((skill) => ({
        id: skill.id,
        name: skill.name,
        description: skill.description,
        icon: iconOverrides[skill.id] || skill.icon,
        color: skill.color,
    }));

    return (
        <div className="flex gap-2">
            <div className="p-2 -mt-5">
                <h2 className="text-3xl md:text-4xl font-bold my-4 ml-6.5 flex gap-1 items-end">
                    Techstack
                </h2>

                <div className="flex flex-wrap justify-center gap-3 px-3">
                    {transformedSkills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}
