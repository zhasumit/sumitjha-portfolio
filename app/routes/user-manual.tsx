import React, { useState } from 'react';
import SmallerTitle from '~/components/smalltitle';
import Title from '~/components/title';
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Sumit Jha - User manual" },
    ];
};

// Importing JSON data
import strengthsData from '~/data/strengths.json';
import weaknessesData from '~/data/weaknesses.json';
import principlesData from '~/data/principles.json';
import quotesData from '~/data/quotes.json';
import Quote from '~/components/quote';

// Import icons 
import overviewgif from "~/../public/gificons/overview.gif"
import thumbsup from "~/../public/gificons/up.gif"
import thumbsdowngif from "~/../public/gificons/down.gif"
import bookmarkgif from "~/../public/gificons/bookmark.gif"
import quotesgif from "~/../public/gificons/quotes.gif"
import sendMessagegif from "~/../public/gificons/send-message.gif"
import Point from '~/components/point';

// Function to calculate the number of days since a given date
const About: React.FC = () => {
    const [isHoveredEmail, setIsHoveredEmail] = useState(false);
    const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);

    return (
        <div className="mt-8 mb-20 lg:mb-24 font-light text-gray-200 tracking-tight leading-relaxed text-lg p-4 lg:p-0">
            <Title first="User" second="Manual" />

            <div className='flex items-center gap-2'>
                <img src={overviewgif} className='h-12 -mb-3 sm:h-10' />
                <SmallerTitle heading='OVERVIEW' />
            </div>
            <p className='text-neutral-400'>
                <Point topic="5-3-1 Enneagram" desc="Investigator, Achiever, and Perfectionist. Remarkably efficient, hard-working and competent. While sometimes self-righteous, pragmatic and tactful enough not to compromise goals by being too inflexible. Can be clever, self-confident, perfectionist. Introverted, Intuitive, Thinking, Judging, and Assertive." />
            </p>
            <br />
            <br />
            <div className='flex items-center gap-2'>
                <img src={thumbsup} className='h-12 -mb-3 sm:h-10' />
                <SmallerTitle heading='STRENGTHS' />
            </div>
            <ul>
                {strengthsData.map((strength, index) => (
                    <Point topic={strength.title} desc={strength.description} />
                ))}
            </ul>

            <br />
            <br />

            <div className='flex items-center gap-2'>
                <img src={thumbsdowngif} className='h-12 -mb-3 sm:h-10' />
                <SmallerTitle heading='WEAKNESSES' />
            </div>
            <ul>
                {weaknessesData.map((weakness, index) => (
                    <Point topic={weakness.title} desc={weakness.description} />
                ))}
            </ul>

            <br />
            <br />

            <div className='flex items-center gap-2'>
                <img src={bookmarkgif} className='h-12 -mb-3 sm:h-10' />
                <SmallerTitle heading='PRINCIPLES' />
            </div>
            <ul>
                {principlesData.map((principle, index) => (
                    <Point topic={principle.title} desc={principle.description} />
                ))}
            </ul>

            <br />
            <br />

            <div className='flex items-center gap-2'>
                <img src={quotesgif} className='h-12 -mb-3 sm:h-10' />
                <SmallerTitle heading='FAVORITE QUOTES' />
            </div>
            {quotesData.map((quoteObj, index) => (
                <Quote key={index} quote={quoteObj.quote} author={quoteObj.author} />
            ))}


            <br />

            <div className='flex items-center gap-2'>
                <img src={sendMessagegif} className='h-12 -mb-3 rounded-full sm:h-10' />
                <SmallerTitle heading='GET IN TOUCH' />
            </div>
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
                </a> and I tend to be pretty active on  <a
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

        </div >
    );
};

export default About;