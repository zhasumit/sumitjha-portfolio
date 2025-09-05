import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Experience = () => {
    return (
        <div className="p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Experience</h2>

            <ul className="relative border-l-2 border-gray-300 pl-3">
                <li className="ml-4">
                    <div className="absolute w-6 h-6 bg-primary rounded-full -left-3 -top-1 border-2 border-primary-content"></div>
                    <time className="block mt-2 mb-1 text-sm font-mono font-semibold text-primary">
                        Jan 2025 – Present
                    </time>
                    <div className="text-2xl font-bold flex gap-2 mb-2">
                        <Image
                            src="/companies/prismberry.png"
                            alt="Sumit"
                            width={30}
                            height={30}
                        />
                        Prismberry</div>

                    <div className="text-sm text-gray-500 flex "><MapPin size={14} className="mr-0.5 text-red-300" /> Noida, UP, India</div>
                    <div className="font-semibold ml-1">Software Developer Engineer</div>

                    <ul className="list-disc list-inside leading-relaxed space-y-5 mt-2">
                        <li>
                            <span className="font-semibold text-xl blue-highlight">Taxspanner</span> – Tax compliance platform for digital filing of TDS, GST, and income tax returns.
                            <ul className="list-disc list-inside ml-8">
                                <li>Designed and implemented core user workflows using <b>Django, DRF, and Next.js (v13-15)</b></li>
                                <li>ensuring faster navigation & smoother filing for <b> 500+ users</b> for ITR-1 & ITR-4.</li>
                                <li>Built <b>30+ reusable UI components</b>, boosting design consistency and cutting new feature dev time by ~25%.</li>
                                <li>Optimized backend queries and caching, reducing <b>API response times by 30%</b> and improving overall platform speed.</li>
                                <li>Contributed to improved user experience, leading to a <b>20% increase in feature adoption</b> within 3 months.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold text-xl red-highlight">Propel</span> - Business management platform for operations, finance, and team collaboration.
                            <ul className="list-disc list-inside ml-8">
                                <li>Developed dynamic <b>financial and operational report UIs</b> using ERB, improving data readability for 500+ business users.</li>
                                <li>Wrote backend <b>data parsers in Ruby</b> to automate report generation, cutting manual effort by 40%.</li>
                                <li>Enhanced scalability of card management and transaction workflows with <b>Rails + PostgreSQL optimizations</b></li>
                                <li>Collaborated with cross-functional teams to streamline workflows, reducing reporting delays by <b>~35%</b>.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Experience;
