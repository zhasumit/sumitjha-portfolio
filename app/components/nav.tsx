import { Link } from '@remix-run/react';
import { useState } from 'react';
import Resume from '~/data/Sumit Kr Jha - fullstack developer.pdf';

const Nav: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    const navItems = [
        { to: "/", imgSrc: "home.svg", title: "Home" },
        { to: "/projects", imgSrc: "projects.svg", title: "Projects" },
        { to: "/tech-stack", imgSrc: "techstack.svg", title: "Tech Stack" },
        { to: "/about", imgSrc: "ghost.svg", title: "About Me" },
        { to: "/user-manual", imgSrc: "usermanual.svg", title: "User Manual" },
        { to: Resume, imgSrc: "resume.svg", title: "Resume", isExternal: true },
    ];

    return (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex gap-4 bg-[#202125] w-72 items-center justify-center p-2 rounded-md relative">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center"
                        onMouseEnter={() => setHovered(item.title)}
                        onMouseLeave={() => setHovered(null)}
                        onTouchStart={() => setHovered(item.title)}
                        onTouchEnd={() => setHovered(null)}
                    >
                        {hovered === item.title && (
                            <div className="absolute -top-9 px-2 py-1 bg-black text-white text-sm rounded-md shadow-md whitespace-nowrap">
                                {item.title}
                            </div>
                        )}
                        {item.isExternal ? (
                            <a href={item.to} target="_blank" rel="noopener noreferrer">
                                <img src={item.imgSrc} className="h-7" alt={item.title} />
                            </a>
                        ) : (
                            <Link to={item.to}>
                                <img src={item.imgSrc} className="h-7" alt={item.title} />
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Nav;
