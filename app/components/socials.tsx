import React, { useState, useRef } from "react";
import socials from "~/data/socials.json"; // Adjust the path if necessary

interface Social {
    name: string;
    url: string;
    icon: string;
    title: string;
}

const Socials: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent, index: number) => {
        if (containerRef.current && hoveredIndex === index) {
            const container = containerRef.current.children[index] as HTMLElement;

            // Calculate cursor position relative to the button
            const rect = container.getBoundingClientRect();
            const offsetX = e.clientX - rect.left - rect.width / 2;
            const offsetY = e.clientY - rect.top - rect.height / 2;

            // Set the translation based on cursor proximity
            container.style.transform = `translate(${Math.min(
                Math.max(offsetX, -10),
                10
            )}px, ${Math.min(Math.max(offsetY, -10), 10)}px)`;
        }
    };

    const handleMouseLeave = (index: number) => {
        setHoveredIndex(null);

        // Reset the button's position when mouse leaves
        const container = containerRef.current?.children[index] as HTMLElement;
        if (container) {
            container.style.transform = "translate(0, 0)";
        }
    };

    return (
        <div
            ref={containerRef}
            className="grid grid-cols-3 sm:grid-cols-4 px-10 gap-2 mb-24 md:mb-16"
        >
            {socials.map((social: Social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className={`group relative flex flex-col items-center p-2 py-8 transition-all duration-250 bg-neutral-900/50 hover:bg-neutral-700 hover:z-10 rounded-md `}
                    title={social.title}
                >
                    <img
                        src={social.icon}
                        alt={social.name}
                        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                    />

                    <div className="absolute top-2 right-2 sm:right-5 md:right-6 font-black text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ↗
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Socials;
