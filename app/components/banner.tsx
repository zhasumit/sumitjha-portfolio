import React, { useEffect, useState } from "react";
import sumit from "/me/sumit.jpg";
import longIcon from "/me/long icon.png";
import Title from "./title";

// Define the shape of the experience state
interface Experience {
    value: number;
    unit: "Day" | "Days" | "Month" | "Months" | "Year" | "Years";
}

const Banner: React.FC = () => {
    const [experience, setExperience] = useState<Experience>({ value: 0, unit: "Days" });

    useEffect(() => {
        const startDate = new Date("2024-12-01");
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - startDate.getTime(); // Difference in milliseconds
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        let value: number;
        let unit: Experience["unit"];
        if (daysDifference >= 365) {
            value = Math.floor(daysDifference / 365);
            unit = value === 1 ? "Year" : "Years";
        } else if (daysDifference >= 30) {
            value = Math.floor(daysDifference / 30);
            unit = value === 1 ? "Month" : "Months";
        } else {
            value = daysDifference >= 0 ? daysDifference : 0; // Prevent negative days
            unit = value === 1 ? "Day" : "Days";
        }
        setExperience({ value, unit });
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row gap-10 items-center px-4 lg:px-0 mt-20 md:mt-8  mb:mt-8 mb-24 md:mb-8 ">
                <div>
                    <img
                        src={sumit}
                        className="rounded-full font-bold p-1 bg-white -mt-8 w-64 md:w-96"
                        alt="Sumit"
                    />
                    <img
                        src={longIcon}
                        className="relative -top-2 -rotate-12 h-10 ml-24 md:ml-16 md:-top-5 lg:-top-2"
                        alt="Long Icon"
                    />
                </div>
                <div className="text-center md:text-left">
                    <Title first="software" second="developer" />
                    <div className="text-neutral-400 font-light">
                        Passionate developer with a knack for creating dynamic web applications, for engaging user experiences.Exploring technologies, and engaging in adventures.
                    </div>
                    <div className="mt-5 flex gap-8">
                        {/* <div>
                            <span className="font-semibold text-3xl md:text-4xl lg:text-5xl">
                                +{experience.value}
                            </span>
                            <div className="text-neutral-500 text-sm tracking-tighter leading-tight uppercase">
                                <div>{experience.unit} of<br /> Experience</div>
                            </div>
                        </div> */}
                        <div>
                            <span className="font-semibold text-3xl md:text-4xl lg:text-5xl">+10</span>
                            <div className="text-neutral-500 text-sm tracking-tighter leading-tight uppercase">
                                <div>Projects<br /> Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </>
    );
};

export default Banner;
