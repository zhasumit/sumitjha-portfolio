// components/Footer.tsx
"use client";

import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX, BsDiscord } from "react-icons/bs";
import { PiMailboxDuotone, PiSuitcaseDuotone } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";
import { LuGithub } from "react-icons/lu";
import MumbaiGate from "./icons/MumbaiGate";

// --- Helper: Convert color → rgba with alpha
function colorToRgba(color: string | undefined, alpha = 0.27) {
    if (!color) return `rgba(0,0,0,${alpha})`;

    // hex: #RGB or #RRGGBB
    const hex = color.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hex) {
        const h = hex[1];
        let r: number, g: number, b: number;
        if (h.length === 3) {
            r = parseInt(h[0] + h[0], 16);
            g = parseInt(h[1] + h[1], 16);
            b = parseInt(h[2] + h[2], 16);
        } else {
            r = parseInt(h.slice(0, 2), 16);
            g = parseInt(h.slice(2, 4), 16);
            b = parseInt(h.slice(4, 6), 16);
        }
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // already rgb/rgba
    const rgbMatch = color.trim().match(/rgba?\(([^)]+)\)/i);
    if (rgbMatch) {
        const parts = rgbMatch[1].split(",").map((p) => p.trim());
        const r = parts[0],
            g = parts[1],
            b = parts[2];
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // fallback
    return `rgba(0,0,0,${alpha})`;
}

// --- Helper: Calculate tooltip position
function calculateTooltipPosition(x: number, y: number) {
    const tooltipWidth = 270; // max-w-[270px]
    const tooltipHeight = 80; // approximate height
    const baseOffset = 10;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left: number;
    let top: number;

    // Default: to the right of the cursor
    left = x + baseOffset + 6; // nudge a little more right
    top = y + baseOffset + 8;  // nudge a little more down

    // If going off-screen right → place to the left, but closer
    if (left + tooltipWidth > viewportWidth) {
        left = x - tooltipWidth - baseOffset + 150; // bring closer
    }

    // If going off-screen bottom → place above, but closer
    if (top + tooltipHeight > viewportHeight) {
        top = y - tooltipHeight - baseOffset + 0;
    }

    // Clamp to not go off-screen completely
    left = Math.max(baseOffset, left);
    top = Math.max(baseOffset, top);

    return { left, top };
}


// --- Types
type SocialLink = {
    id: string;
    href: string;
    platform: string;
    username: string;
    icon: any;
    color: string;
};

const socials: SocialLink[] = [
    {
        id: "github",
        href: "https://github.com/zhasumit/",
        platform: "GitHub",
        username: "@zhasumit",
        icon: <LuGithub className="h-5 w-5 md:h-6 md:w-6" />,
        color: "#333333",
    },
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/sumitjha1618/",
        platform: "LinkedIn",
        username: "sumitjha1618",
        icon: <FaLinkedinIn className="h-5 w-5 md:h-6 md:w-6" />,
        color: "#0077B5",
    },
    {
        id: "twitter",
        href: "https://www.x.com/__sumitjha/",
        platform: "Twitter (X)",
        username: "@__sumitjha",
        icon: <BsTwitterX className="h-4 w-4 md:h-5 md:w-5" />,
        color: "#000000",
    },
    {
        id: "email",
        href: "mailto:sumitjha1618@gmail.com",
        platform: "Email",
        username: "sumitjha1618",
        icon: <PiMailboxDuotone className="h-5 w-5 md:h-6 md:w-6" />,
        color: "#FF7F50",
    },
    {
        id: "resume",
        href: "https://drive.google.com/file/d/1LrUGlH_wrdqLusxDumFc7OEZWJWEgbpq/view?usp=sharing",
        platform: "Resume",
        username: "Sumit Jha",
        icon: <PiSuitcaseDuotone className="h-5 w-5 md:h-6 md:w-6" />,
        color: "#4682B4",
    },
    {
        id: "discord",
        href: "https://discord.com/users/784362664037580841",
        platform: "Discord",
        username: "sumit#404",
        icon: <BsDiscord className="h-5 w-5 md:h-6 md:w-6" />,
        color: "#5865F2",
    },
    {
        id: "whatsapp",
        href: "https://wa.me/7294043415",
        platform: "WhatsApp",
        username: "+91-72xxxxx415",
        icon: <ImWhatsapp className="h-4 w-4 md:h-5 md:w-5" />,
        color: "#25D366",
    },
];

export default function Footer() {
    const [time, setTime] = useState("");
    const [hovered, setHovered] = useState<SocialLink | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Live time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            };
            setTime(new Intl.DateTimeFormat("en-IN", options).format(now));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

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

    // Handle tooltip content and positioning
    useEffect(() => {
        const portal = document.getElementById("tooltip-portal");
        if (portal && hovered) {
            const alphaColor = colorToRgba(hovered.color, 0.27);
            const { left, top } = calculateTooltipPosition(mousePos.x, mousePos.y);

            portal.innerHTML = `
                <div class="max-w-[270px] bg-base-200 border border-base-300 text-base-content text-xs px-5 py-3 rounded-lg shadow-xl backdrop-blur-sm">
                    <div 
                        class="font-semibold inline-block text-lg"
                        style="background: linear-gradient(transparent 65%, ${alphaColor} 65%);"
                    >
                        ${hovered.username}
                    </div>
                    <div class="text-base opacity-80">${hovered.platform}</div>
                </div>
            `;
            portal.style.display = "block";
            portal.style.left = `${left}px`;
            portal.style.top = `${top}px`;
        } else if (portal) {
            portal.style.display = "none";
        }
    }, [hovered, mousePos]);

    return (
        <footer className="relative w-full mt-20">
            {/* Gradient background blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-accent/70 to-secondary/70 animate-gradient-x opacity-30 blur-xl rounded-t-3xl"></div>

            <div className="relative backdrop-blur-md bg-base-100/70 border-t border-base-content/20 shadow-2xl rounded-t-3xl p-1 md:p-8 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
                    {/* Location */}
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-base text-base-content/80 ml-1">
                            <span className="text-secondary text-xs mr-2">IST</span>
                            {time}
                        </span>
                        <div className="flex gap-1 justify-end items-end">
                            <span className="mb-1"><MumbaiGate className="h-5 w-5 md:h-6 md:w-6" /></span>
                            <span className="text-base-content/80 text-base md:text-lg">Based in India</span>
                        </div>
                    </div>

                    {/* Socials with improved hover effects */}
                    <div className="flex flex-wrap justify-center gap-0.5 md:gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.id}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-ghost hover:btn-outline hover:bg-base-200/80 hover:border-base-300 hover:shadow-sm hover:scale-110 transition-all duration-200 ease-out"
                                onMouseEnter={() => setHovered(s)}
                                onMouseLeave={() => setHovered(null)}
                                onMouseMove={(e) =>
                                    setMousePos({ x: e.clientX, y: e.clientY })
                                }
                                style={{
                                    color: s.color,
                                    '--tw-shadow-color': colorToRgba(s.color, 0.2)
                                } as React.CSSProperties}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gradient Animation Styles */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%,
                    100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 10s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
}