import skills from "~/data/skills.json";
import type { MetaFunction } from "@remix-run/node";
import BubbleText from "./bubbletext";

export const meta: MetaFunction = () => {
    return [
        { title: "Sumit Jha - tech arsenal" },
    ];
};

const TechStack = () => {
    return (
        <div className='max-w-screen-xl m-auto min-h-[100vh] '>
            <div className='inter text-7xl flex gap-4 font-medium'>
                <BubbleText word="Tech Arsenal" />
            </div>
            <br />
            <div className="grid grid-cols-2 sm:grid-cols-3 text-neutral-100 gap-2">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 rounded-lg hover:bg-neutral-800/20 mr-2 p-3 pl-3"
                    >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        />
                        <div className="flex flex-col justify-center ml-1">
                            <h3 className="text-md md:text-xl tracking-tighter leading-tight">{skill.name}</h3>
                            <p className="text-gray-500 text-sm">{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack