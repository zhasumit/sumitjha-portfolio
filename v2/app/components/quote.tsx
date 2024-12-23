import React from 'react'

interface QuoteProps {
    quote: string;
    author: string;
}

const Quote: React.FC<QuoteProps> = ({ quote, author }) => {
    return (
        <blockquote className='bg-[#0e1e31] rounded-sm my-2 p-2 px-4 md:px-10 leading-snug border-l-8 border-blue-500 flex flex-col'>
            <p className='text-base font-light flex-grow text-neutral-300 md:font-normal leading-tight'>{quote}</p>
            <footer className='text-xs md:text-sm italic self-end mt-2 text-neutral-400 '>- {author}</footer>
        </blockquote>
    );
    
};

export default Quote;