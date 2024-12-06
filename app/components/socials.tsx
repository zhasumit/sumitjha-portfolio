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
    const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
    const [tooltipTitle, setTooltipTitle] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent, index: number, title: string) => {
        if (containerRef.current) {
            // Update tooltip position, index, and title
            setHoveredIndex(index);
            setTooltipTitle(title);
            setTooltipPosition({
                x: e.pageX - 5, // Tooltip appears 10px left of the cursor
                y: e.pageY + 14, // Tooltip appears 10px below the cursor
            });

            // Magnetic effect: Calculate cursor position relative to the button
            const container = containerRef.current.children[index] as HTMLElement;
            const rect = container.getBoundingClientRect();
            const offsetX = e.clientX - rect.left - rect.width / 2;
            const offsetY = e.clientY - rect.top - rect.height / 2;

            // Move button slightly towards the cursor
            container.style.transform = `translate(${Math.min(Math.max(offsetX, -10), 10)}px, ${Math.min(
                Math.max(offsetY, -10),
                10
            )}px)`;
        }
    };

    const handleMouseLeave = (index: number) => {
        setHoveredIndex(null);
        setTooltipPosition(null);
        setTooltipTitle(null);

        // Reset button position when mouse leaves
        const container = containerRef.current?.children[index] as HTMLElement;
        if (container) {
            container.style.transform = "translate(0, 0)";
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative grid grid-cols-3 sm:grid-cols-4 px-10 gap-1 mt-20 md:mt-16 mb-24 md:mb-16 md:mt-4"
        >
            {socials.map((social: Social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => handleMouseMove(e, index, social.title)}
                    onMouseMove={(e) => handleMouseMove(e, index, social.title)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className={`group relative flex flex-col items-center p-2 py-8 transition-all duration-250 bg-neutral-900/50 hover:bg-neutral-700 hover:z-10 rounded-md text-neutral-100`}
                >
                    <img
                        src={social.icon}
                        alt={social.name}
                        className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                    <div className="absolute top-2 right-2 sm:right-5 md:right-6 font-black text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ↗
                    </div>
                </a>
            ))}

            {/* Tooltip */}
            {tooltipPosition && hoveredIndex !== null && tooltipTitle && (
                <div
                    className="fixed bg-black text-white text-sm px-3 py-1 rounded-md shadow-lg pointer-events-none transition-opacity duration-300 z-50"
                    style={{
                        top: tooltipPosition.y,
                        left: tooltipPosition.x,
                    }}
                >
                    {tooltipTitle}
                </div>
            )}
        </div>
    );
};

export default Socials;
