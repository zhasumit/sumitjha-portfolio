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
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="mt-10 md:mt-1">
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
                <div className="text-center md:text-left -mt-5 md:mt-0">
                    <Title first="software" second="developer" />
                    <div className="text-neutral-400 font-light">
                        Passionate developer with a knack for creating dynamic applications, that provide exceptional user experiences. Exploring technologies, and engaging in adventures.
                    </div>
                    <div className="mt-3 sm:mt-2 md:mt-2 flex gap-8 text-neutral-100">
                        {/* <div>
                            <span className="font-semibold text-3xl md:text-4xl lg:text-5xl">
                                +{experience.value}
                            </span>
                            <div className="text-neutral-500 text-sm tracking-tighter leading-tight uppercase">
                                <div>{experience.unit} of<br /> Experience</div>
                            </div>
                        </div> */}
                        <div>
                            <span className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                                Fresher
                            </span>
                            <div className="text-neutral-500 text-xs tracking-tighter leading-tight uppercase">
                                <div>NIT Allahbad<br />24' undergrad</div>
                            </div>
                        </div>
                        <div>
                            <span className="font-semibold text-2xl md:text-3xl lg:text-4xl">5+</span>
                            <div className="text-neutral-500 text-xs tracking-tighter leading-tight uppercase">
                                <div>Projects<br /> Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
