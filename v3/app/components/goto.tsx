import React from 'react';

// Define the type for the props
interface GotoProps {
    title: string;
    url: string;
    num: number;
}

const Goto: React.FC<GotoProps> = ({ title, url, num }) => {
    return (
        <div>
            <a href={url} >
                <span className='hover:text-yellow-100 p-[2px] '>{title}</span>
                <sup className='text-yellow-400 mono'>{num}</sup>
            </a>
        </div>
    );
};

export default Goto;
