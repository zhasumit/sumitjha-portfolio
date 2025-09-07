"use client";

import { useEffect, useState } from "react";
import Badge from "./BadgeComponent";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { PiMailboxDuotone, PiSuitcaseDuotone } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { RiGithubLine } from "react-icons/ri";

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

// --- Types for social links
type SocialLink = {
    id: string;
    href: string;
    platform: string;
    username: string;
    icon: any;
    color: string;
    text: string;
};

interface SocialLinksProps {
    className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => {
    const [hovered, setHovered] = useState<SocialLink | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Social links data
    const socials: SocialLink[] = [
        {
            id: "github",
            href: "https://github.com/zhasumit/",
            platform: "GitHub",
            username: "@zhasumit",
            icon: <RiGithubLine color="gray" size={20} />,
            color: "gray",
            text: "GitHub"
        },
        {
            id: "linkedin",
            href: "https://www.linkedin.com/in/sumitjha1618/",
            platform: "LinkedIn",
            username: "sumitjha1618",
            icon: <FaLinkedinIn color="#0077B5"  />,
            color: "#0077B5",
            text: "LinkedIn"
        },
        {
            id: "twitter",
            href: "https://www.x.com/__sumitjha/",
            platform: "Twitter (X)",
            username: "@__sumitjha",
            icon: <BsTwitterX color="#000" size={16} />,
            color: "#000",
            text: "Twitter"
        },
        {
            id: "email",
            href: "mailto:sumitjha1618@gmail.com",
            platform: "Email",
            username: "sumitjha1618",
            icon: <PiMailboxDuotone color="Coral" size={20} />,
            color: "Coral",
            text: "Mail"
        },
        {
            id: "resume",
            href: "https://drive.google.com/file/d/1LrUGlH_wrdqLusxDumFc7OEZWJWEgbpq/view?usp=sharing",
            platform: "Resume",
            username: "Sumit Jha",
            icon: <PiSuitcaseDuotone color="steelblue" size={20} />,
            color: "steelblue",
            text: "Resume"
        },
        {
            id: "discord",
            href: "https://discord.com/users/784362664037580841",
            platform: "Discord",
            username: "sumit#404",
            icon: <BsDiscord color="#5865F2" />,
            color: "#5865F2",
            text: "Discord"
        },
        {
            id: "whatsapp",
            href: "https://wa.me/7294043415",
            platform: "WhatsApp",
            username: "+91-72xxxxx415",
            icon: <ImWhatsapp color="green" size={16} />,
            color: "green",
            text: "WhatsApp"
        }
    ];

    // Tooltip portal setup
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
        <div className={`flex flex-wrap justify-center lg:justify-start gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-2 xl:gap-3 ${className}`}>
            {socials.map((social) => (
                <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(social)}
                    onMouseLeave={() => setHovered(null)}
                    onMouseMove={(e) =>
                        setMousePos({ x: e.clientX, y: e.clientY })
                    }
                >
                    <Badge icon={social.icon} text={social.text} />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;