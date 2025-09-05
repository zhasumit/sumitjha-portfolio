import React from 'react'

const funSkills = [
    { skill: "Overengineering simple problems", level: "Advanced" },
    { skill: "Setting food on fire", level: "Intermediate" },
    { skill: "Eating family pack icecream", level: "Expert" },
    { skill: "Debugging at 3 AM", level: "Advanced insomniac" },
    { skill: "Breaking production accidentally", level: "Certified" },
    { skill: "Refactoring code that worked fine", level: "Professional" },
    { skill: "Fixing one bug, creating three more", level: "Expert" },
    { skill: "Commit messages like “final_final”", level: "Mastery unlocked" },
    { skill: "Procrastinating with side projects", level: "Expert" },
    { skill: "Dark mode loyalty", level: "Unbreakable" }
];

const Sidequests = () => {
    const levelColors: Record<string, string> = {
        Intermediate: "text-blue-500",
        Advanced: "text-orange-500",
        "Advanced insomniac": "text-orange-600",
        Certified: "text-orange-700",
        Professional: "text-blue-700",
        Expert: "text-green-500",
        "Beyond expert": "text-green-600",
        "Mastery unlocked": "text-green-700",
        "Unbreakable": "text-green-800"
    };

    return (
        <div className="px-4 md:px-8 -mt-4">
            <h2 className="text-2xl font-bold">Side Quests</h2>
            <div className="mt-2 pl-4 font-semibold">
                {funSkills.map((item, i) => (
                    <div key={i} className="text-lg">
                        <span className="font-medium">{item.skill}</span>
                        <span className={`ml-2 ${levelColors[item.level] || "text-gray-500"}`}>
                            : {item.level}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidequests