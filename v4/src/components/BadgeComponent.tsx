import React from "react";

type BadgeComponentProps = {
    icon: React.ReactNode;
    text: string;
};

const BadgeComponent: React.FC<BadgeComponentProps> = ({ icon, text }) => {
    return (
        <div className="badge rounded-4xl bg-primary/5 hover:bg-primary/15 text-primary-content inline-flex items-center px-2 md:px-3 py-4 md:py-5 cursor-pointer text-base md:text-lg">
            <span className="flex items-center justify-center">{icon}</span>
            <span className="text-base-content -ml-1 mt-0.5">{text}</span>
        </div>
    );
};

export default BadgeComponent;