import React from "react";

const Experience = () => {
    return (
        <div className="p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience</h2>

            <ul className="relative border-l-2 border-gray-300 pl-3">
                <li className="mb-10 ml-4">
                    <div className="absolute w-6 h-6 bg-primary rounded-full -left-3 top-2 border-2 border-primary-content"></div>
                    <time className="block mb-1 text-sm font-mono italic text-gray-500">
                        Jan 2025 – Present
                    </time>
                    <div className="text-lg font-bold">Software Developer – Prismberry</div>
                    <div className="text-sm text-gray-500 mb-2">Noida, UP, India</div>

                    <ul className="list-disc list-inside text-sm leading-relaxed space-y-3 mt-2">
                        <li>
                            <span className="font-semibold">Taxspanner –</span> Tax compliance platform supporting digital filing of TDS, GST, and income tax returns.
                            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                <li>Led development of user workflows using Django, DRF, and Next.js (v13–15) with a focus on performance and UX.</li>
                                <li>Built reusable UI components, improving design consistency and developer efficiency.</li>
                                <li>Helped achieve a 20% increase in feature adoption and reduced API response times by 30%.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold">Propel –</span> Business management platform for operations, finance, and team collaboration.
                            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                <li>Developed report UIs using ERB and backend parsers in Ruby to enhance data clarity and structure.</li>
                                <li>Improved scalability of card management and transaction workflows using Rails and PostgreSQL.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Experience;
