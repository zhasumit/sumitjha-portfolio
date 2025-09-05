import React from "react";

type BadgeComponentProps = {
    icon: React.ReactNode;
    text: string;
};

const BadgeComponent: React.FC<BadgeComponentProps> = ({ icon, text }) => {
    return (
        <div className="badge rounded-xl bg-primary/5 hover:bg-primary/10 text-primary-content inline-flex items-center py-3 cursor-pointer">
            <span className="flex items-center justify-center">{icon}</span>
            <span className="text-base-content -ml-1 mt-0.5">{text}</span>
        </div>
    );
};

export default BadgeComponent;
