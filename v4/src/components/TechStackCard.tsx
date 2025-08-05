"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { IconType } from "react-icons";

type Tech = {
    name: string;
    icon: IconType;
};

type TechStackCardProps = {
    title: string;
    techs: Tech[];
};

const TechStackCard: React.FC<TechStackCardProps> = ({ title, techs }) => {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            glareColor="#ffffff"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="transition-transform duration-300"
        >
            <div className="bg-base-200 rounded-xl shadow-lg p-6 w-full max-w-md hover:shadow-xl">
                <h2 className="text-xl font-semibold mb-4 text-primary">{title}</h2>
                <div className="flex flex-wrap gap-4 justify-start items-center">
                    {techs.map(({ name, icon: Icon }) => (
                        <div
                            key={name}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="bg-primary text-primary-content p-3 rounded-full shadow-md hover:scale-105 transition-transform">
                                <Icon size={28} />
                            </div>
                            <span className="text-sm mt-1">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Tilt>
    );
};

export default TechStackCard;
