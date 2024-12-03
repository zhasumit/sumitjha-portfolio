import { Link } from '@remix-run/react';
import React, { useState } from 'react';
import Resume from '~/data/Sumit Kr Jha - fullstack developer.pdf'

const Nav: React.FC = () => {
    const [tooltip, setTooltip] = useState<{ visible: boolean; text: string; position: { x: number; y: number } }>({
        visible: false,
        text: '',
        position: { x: 0, y: 0 },
    });

    const showTooltip = (text: string, e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
            visible: true,
            text,
            position: { x: rect.left + rect.width / 2, y: rect.top - 40 }, // Adjusted position for better visibility
        });
    };

    const hideTooltip = () => {
        setTooltip({ visible: false, text: '', position: { x: 0, y: 0 } });
    };

    return (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
            {/* Navigation Bar */}
            <div className="flex gap-4 bg-[#202125] w-64 items-center justify-center p-2 rounded-md">
                <Link
                    to="/"
                    onMouseEnter={(e) => showTooltip('Home', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="home.svg" className="h-7" alt="Home" />
                </Link>
                <Link
                    to="/projects"
                    onMouseEnter={(e) => showTooltip('Projects', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="projects.svg" className="h-7" alt="Projects" />
                </Link>
                <Link
                    to="/tech-stack"
                    onMouseEnter={(e) => showTooltip('Tech stack', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="techstack.svg" className="h-7" alt="Tech Stack" />
                </Link>
                <Link
                    to="/about"
                    onMouseEnter={(e) => showTooltip('About Me', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="ghost.svg" className="h-7" alt="About Me" />
                </Link>
                <Link
                    to="/user-manual"
                    onMouseEnter={(e) => showTooltip('User Manual', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="usermanual.svg" className="h-7" alt="User Manual" />
                </Link>
                <a
                    href={Resume}
                    target='_blank'
                    onMouseEnter={(e) => showTooltip('resume', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="resume.svg" className="h-7" alt="Resume" />
                </a>
            </div>

            {/* Tooltip */}
            {tooltip.visible && (
                <div
                    className="absolute bg-black text-white text-sm rounded shadow-lg z-30"
                    style={{
                        top: tooltip.position.y,
                        left: tooltip.position.x,
                        transform: 'translateX(-50%)', // Keep it centered horizontally
                        whiteSpace: 'nowrap', // Prevent text from wrapping in the tooltip
                        pointerEvents: 'none', // Prevent tooltip from blocking hover events
                    }}
                >
                    <div className="px-2 py-1">{tooltip.text}</div>
                </div>
            )}
        </div>
    );
};

export default Nav;