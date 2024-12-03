import Title from '~/components/title'
import skills from "~/data/skills.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Sumit Jha - tech arsenal" },
    ];
};

const TechStack = () => {
    return (
        <div className="mt-8 mb-20 p-4 lg:p-0">
            <Title first="Tech" second="Arsenal" />
            <br />
            <div className="grid grid-cols-2 sm:grid-cols-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 bg-[#121215] rounded-lg hover:bg-neutral-800/30 mr-2"
                    >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        />
                        <div className="flex flex-col justify-center">
                            <h3 className="text-md md:text-lg tracking-tighter mt-3 leading-tight">{skill.name}</h3>
                            <p className="text-gray-500 text-xs">{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack