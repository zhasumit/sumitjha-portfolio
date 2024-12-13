import React from "react";

interface StrikedProps {
    text: string; // Define the type of the 'text' prop
}

const Striked: React.FC<StrikedProps> = ({ text }) => {
    return <div className="line-through decoration-purple-500 inline">{text}</div>;
};

export default Striked;
