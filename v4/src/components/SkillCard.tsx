"use client";
import React, { useState, useEffect } from "react";

export type Skill = {
    id: string;
    name: string;
    icon: React.ReactNode | string;
    description: string;
    color?: string;
};

type SkillCardProps = {
    skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const skillColor = skill.color;

    // Tooltip portal
    useEffect(() => {
        if (!document.getElementById("tooltip-portal")) {
            const portal = document.createElement("div");
            portal.id = "tooltip-portal";
            portal.style.position = "fixed";
            portal.style.zIndex = "9999";
            portal.style.pointerEvents = "none";
            portal.style.display = "none";
            document.body.appendChild(portal);
        }
    }, []);

    useEffect(() => {
        const portal = document.getElementById("tooltip-portal");
        if (portal) {
            if (isHovering) {
                // Create tooltip content first to measure its width
                portal.innerHTML = `
                    <div class="max-w-[270px] bg-base-200/40 text-base-content text-xs px-5 py-3 rounded-lg shadow-lg shadow-base-300 backdrop-blur-sm">
                        <div 
                            class="font-semibold inline-block text-lg"
                            style="background: linear-gradient(transparent 65%, ${skillColor}44 65%);"
                        >
                            ${skill.name}
                        </div>
                        <div class="opacity-80 mt-1 text-base">${skill.description}</div>
                    </div>
                `;

                // Make it visible temporarily to measure
                portal.style.display = "block";
                portal.style.visibility = "hidden";
                
                const tooltipRect = portal.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                
                // Calculate position
                let leftPos = mousePos.x + 10;
                
                // Check if tooltip would go off-screen on the right
                if (leftPos + tooltipRect.width > viewportWidth - 10) {
                    // Position on the left side of the cursor
                    leftPos = mousePos.x - tooltipRect.width - 10;
                }
                
                // Ensure tooltip doesn't go off-screen on the left
                if (leftPos < 10) {
                    leftPos = 10;
                }

                portal.style.left = `${leftPos}px`;
                portal.style.top = `${mousePos.y - 10}px`;
                portal.style.visibility = "visible";
            } else {
                portal.style.display = "none";
            }
        }
    }, [isHovering, mousePos, skill.name, skill.description, skillColor]);

    const renderIcon = () => {
        if (typeof skill.icon === "string") {
            return (
                <img
                    src={skill.icon}
                    className="object-contain w-9 h-9 md:w-11 md:h-11"
                    alt={skill.name}
                />
            );
        }
        return (
            <div
                className="flex items-center justify-center text-2xl md:text-4xl"
                style={skill.color ? { color: skill.color } : undefined}
            >
                {skill.icon}
            </div>
        );
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setMousePos({
            x: e.clientX + 8,
            y: e.clientY + 25,
        });
    };

    return (
        <div
            className="relative max-w-sm h-full flex flex-col bg-base-100 border-base-300 text-base-content 
                 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden 
                 border hover:border-gray-200 group"
            style={
                skill.color
                    ? {
                        background: `linear-gradient(to bottom, ${skill.color}10 0%, ${skill.color}35 100%), var(--tw-bg-opacity, #fff)`,
                    }
                    : undefined
            }
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
        >
            <div className="flex flex-col flex-1 p-1 items-center justify-center">
                {renderIcon()}
            </div>
        </div>
    );
}