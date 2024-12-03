import Title from '~/components/title';
import { Link } from '@remix-run/react';
import React, { useState } from 'react';
import SmallerTitle from '~/components/smalltitle';
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Sumit Jha - about" },
    ];
};

// Function to calculate the number of days since a given date
const calculateDaysSince = (date: Date): number => {
    const today = new Date();
    const timeDifference = today.getTime() - date.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
};

const About: React.FC = () => {
    const birthDate = new Date('2000-07-24');
    const daysSinceBirth = calculateDaysSince(birthDate);
    const [gotoUserManual, setGotoUserManual] = useState(false);
    const [isHoveredEmail, setIsHoveredEmail] = useState(false);
    const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);


    return (
        <div className="mt-10 mb-20 md:mb-24 font-light text-gray-200 tracking-tight leading-relaxed text-lg p-4 lg:p-0">
            <Title first="About" second="Me" />
            <SmallerTitle heading="Hey, I'm Sumit 👋🏼" />
            <p>
                Hi, I am Sumit, a passionate <span className='lightbold'>full-stack developer</span> based in <span className='lightbold'>India</span>. I started my journey in 2024 and have been dedicated to creating functional and visually appealing websites. Born {daysSinceBirth} days ago, I’ve have had the privilege of exploring a diverse range of tech stacks and cultivating a variety of interests. Currently, my focus is on attracting demand for my services and making meaningful connections in the tech world.
            </p>
            <p>
                I operate at the intersection of <span className='lightbold'>Frontend</span> Development,  <span className='lightbold'>datascience</span>, and  <span className='lightbold'>backend</span>  Development. When I’m not immersed in a project, you can often find me diving into new codebases or learning about emerging technologies.
            </p>

            <p>
                If you want to get in touch, I'm most responsive over <a
                    href="mailto:sumitjha2057@gmail.com"
                    target="_blank"
                    className="underline decoration-[#c58af9] hover:decoration-4 underline-offset-4 lightbold"
                    onMouseEnter={() => setIsHoveredEmail(true)}
                    onMouseLeave={() => setIsHoveredEmail(false)}
                >
                    email
                    <span
                        className={`inline-block transition-transform duration-200 ${isHoveredEmail ? 'transform -translate-y-1 translate-x-1 font-bold' : 'text-[0px]'
                            }`}
                    >
                        ↗
                    </span>
                </a> and I tend to be pretty active on <a
                    href="https://www.instagram.com/sumitk.jha/"
                    target="_blank"
                    className="underline decoration-[#c58af9] hover:decoration-4 underline-offset-4 lightbold"
                    onMouseEnter={() => setIsHoveredInstagram(true)}
                    onMouseLeave={() => setIsHoveredInstagram(false)}
                >
                    instagram
                    <span
                        className={`inline-block transition-transform duration-200 ${isHoveredInstagram ? 'transform -translate-y-1 translate-x-1 font-bold' : 'text-[0px]'
                            }`}
                    >
                        ↗
                    </span>
                </a> as well.
            </p>

            <SmallerTitle heading="PREVIOUSLY" />
            <p>
                I am a <span className='lightbold'>CS undergrad 24'</span> from <span className='lightbold'>MNNIT-Allahabad</span>. Before that, I completed my secondary and senior secondary education at <span className='lightbold'>DAV Biratnagar</span>. I was raised in Ghato city, Hazaribagh, and finished my schooling at <span className='lightbold'>Holy Cross School</span>.
            </p>



            <SmallerTitle heading="USER MANUAL" />
            <p>
                I’ve put together a <Link
                    to={"/user-manual"}
                    className="underline decoration-[#c58af9] hover:decoration-4 underline-offset-4 lightbold"
                    onMouseEnter={() => setGotoUserManual(true)}
                    onMouseLeave={() => setGotoUserManual(false)}
                >
                    playbook
                    <span
                        className={`inline-block transition-transform duration-200 ${gotoUserManual ? 'transform -translate-y-1 translate-x-1 font-bold' : 'text-[0px]'
                            }`}
                    >
                        ↗
                    </span>
                </Link> that outlines how to work with me. It includes insights into my strengths, weaknesses, and the principles I strive to uphold in my professional journey.
            </p>

        </div>
    );
};

export default About;