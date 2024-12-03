import React from 'react';

interface PointProps {
    topic: string; // Text to display in the highlighted span
    desc: string; // Text to display as the second part
}

const Point: React.FC<PointProps> = ({ topic, desc }) => {
    return (
        <div className="flex flex-col sm:flex-row px-4 py-3 border-b-[1px] border-neutral-700 items-start sm:items-center gap-2 sm:gap-0">
            {/* Highlighted topic */}
            <div className="w-full sm:flex-[0.4] text-neutral-100 text-base sm:text-lg font-semibold">
                <span className="highlight">{topic}</span>
            </div>
            {/* Description */}
            <div className="w-full sm:flex-1 text-neutral-400 text-sm sm:text-base font-normal">
                {desc}
            </div>
        </div>

    );
};

export default Point;
