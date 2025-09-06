import { MapPin } from "lucide-react";
import React from "react";

const Education = () => {
    const educationData = [
        {
            id: "college",
            period: "Nov 2020 – Jun 2024",
            institute: "Motilal Nehru National Institute of Technology, Allahabad",
            logo: "/education/mnnit.png",
            location: "Prayagraj, Uttar Pradesh, India",
            degree: "B.Tech [ Computer Science & Engineering ]",
            score: "7.85/10 CPI",
            highlights: [
                "Strong foundation in Data Structures, Algorithms, and System Design",
                "Capstone projects in Artificial Intelligence & Full-Stack Web Development",
                "Hands-on experience with OS, DBMS, and Computer Networks",
                "Collaborated on team projects, gaining exposure to agile development practices",
            ],
        },
        {
            id: "highschool",
            period: "Jun 2017 – Jul 2019",
            institute: "DAV Kedia Vishwabharti School",
            logo: "/education/DAV.png",
            location: "Biratnagar, Morang, Nepal",
            degree: "Senior Secondary (CBSE – PCM)",
            score: "81.8%",
            highlights: [
                "Specialized in Physics, Chemistry, Mathematics, and Computer Science",
                "Developed logical reasoning and analytical problem-solving skills",
                "Participated in school-level coding and science competitions",
            ],
        },
        {
            id: "secondary",
            period: "May 2015 – May 2017",
            institute: "DAV Kedia Vishwabharti School",
            logo: "/education/DAV.png",
            location: "Biratnagar, Morang, Nepal",
            degree: "Secondary Education (CBSE Class X)",
            score: "9.2/10 CGPA",
            highlights: [
                "Built a strong academic foundation across core subjects",
                "Enhanced self-assessment and independent study habits",
                "Active in extracurriculars like debates, quizzes, and team activities",
            ],
        },
        {
            id: "upper-primary",
            period: "May 2012 – Apr 2015",
            institute: "DAV Kedia Vishwabharti School",
            logo: "/education/DAV.png",
            location: "Biratnagar, Morang, Nepal",
            degree: "Classes VII, VIII, IX",
            highlights: [
                "Built a strong academic foundation across core subjects",
                "Enhanced self-assessment and independent study habits",
                "Active in extracurriculars like debates, quizzes, and team activities",
            ],
        },
        {
            id: "primary",
            period: "May 2007 – Apr 2012",
            institute: "Holy Cross School",
            logo: "/education/holy-cross-school.png",
            location: "Ghatotand, Hazaribagh, Jharkhand, India",
            degree: "Classes II, III, IV, V, VI",
            highlights: [
                "Built early social and communication skills",
                "Developed strong english grammar, reading and writing skills",
            ],
        },
        {
            id: "kindergarten",
            period: "May 2005 – Apr 2007",
            institute: "Sharda Shishu Vikas School",
            logo: "/education/sharda-shishu-vikas-school.png",
            location: "Parej, Tapin, Ramgarh, Jharkhand, India",
            degree: "LKG, UKG, I",
        },
    ];

    return (
        <div className="p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>

            <ul className="relative border-l-2 border-gray-300 pl-3 space-y-4">
                {educationData.map((edu) => (
                    <li key={edu.id} className="ml-4 relative">
                        <div className="absolute w-6 h-6 bg-primary rounded-full -left-10 -top-0.5 border-2 border-primary-content"></div>

                        <time className="block text-base font-semibold text-primary">
                            {edu.period}
                        </time>

                        {edu?.location && (
                            <div className="text-sm text-gray-500 flex my-1">
                                <MapPin size={14} className="mr-0.5 text-red-300" /> {edu?.location}
                            </div>
                        )}

                        <div className="text-2xl font-bold flex gap-2">
                            <img src={edu.logo} alt="" className="h-7" /> {edu.institute}
                        </div>

                        <div className="font-semibold"><span className="blue-highlight px-1">{edu?.degree}</span> <span className="text-base text-primary">{edu.score}</span></div>

                        <ul className="list-disc list-inside leading-relaxed ml-6 text-base">
                            {edu.highlights?.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
