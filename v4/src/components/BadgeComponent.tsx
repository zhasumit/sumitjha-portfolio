import React from "react";

type BadgeComponentProps = {
    icon: React.ReactNode;
    text: string;
};

const BadgeComponent: React.FC<BadgeComponentProps> = ({ icon, text }) => {
    return (
        <div className=" inline-flex items-center overflow-hidden rounded-full border border-base-content/20 text-sm font-medium">
            <span className="pl-1 flex items-center justify-center text-base-content rounded-full">
                {icon}
            </span>
            <span className="pl-0.5 px-1 bg-base-100 text-base-content rounded-r-full">
                {text}
            </span>
        </div>
    );
};

export default BadgeComponent;
