import tags from '@/data/tags.json';
import { TbLanguage, TbLanguageHiragana, TbLanguageOff } from 'react-icons/tb';

const About = () => {
    return (
        <>
            <div className="w-full px-0 md:px-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">About</h2>
                <div className="relative min-h-[200px] md:min-h-[250px]">
                    <div className="space-y-2 relative z-10">
                        <p className="text-base md:text-lg">
                            I'm Sumit, a Computer Science Engineer from NIT-Allahabad,
                            which basically means I survived four years of deadlines, chai-fueled coding nights,
                            and the occasional existential crisis.
                        </p>
                        <p className="text-base md:text-lg">
                            I grew up in Ghatotand, Parej, Ramgarh, where most of my time was split between
                            my grandfather's stories and Holy Cross School's homework.
                            Then I spent 2012–2019 in Nepal, adding yet another uniform to my collection
                            before finally ending up in NIT-A India for college.
                            At this point, I've switched schools so often I could probably start a loyalty program.
                        </p>
                        <p className="text-base md:text-lg">
                            These days I spend my time messing with shiny new tech,
                            which I decide to waste my sleep schedule on.
                        </p>
                        <p className="text-base md:text-lg">
                            Outside code, I indulge in a chain of watching anime, series, and movies.
                            In short: code keeps me busy, anime and series keep me sane,
                            and sarcasm makes sure I don't take any of it too seriously.
                            Could I *be* any more clear?
                        </p>
                    </div>
                    {/* Totoro image positioned at bottom right, behind text */}
                    <div className="absolute -bottom-6 right-0 z-0">
                        <img
                            src="./gifs/totoro.gif"
                            className="w-44 md:w-52 rounded-full object-contain opacity-30"
                            alt="Totoro"
                        />
                    </div>
                </div>

                {/* Tags */}
                <h2 className="text-3xl font-bold mb-3 mt-8">Tags</h2>
                <div className="flex flex-wrap gap-1 select-none">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="badge badge-lg bg-primary/60 text-primary-content"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Languages */}
                <h2 className="text-2xl font-bold mt-8 mb-2 flex gap-1">
                    <svg
                        className="h-7 text-primary/80"
                        fill="currentColor"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M21.05566,12h-2a1,1,0,0,0,0,2v2H17.8714a2.96481,2.96481,0,0,0,.18426-1A2.99955,2.99955,0,0,0,12.458,13.50049a.99992.99992,0,1,0,1.73242.999A1.0009,1.0009,0,0,1,15.05566,14a1,1,0,0,1,0,2,1,1,0,0,0,0,2,1,1,0,1,1,0,2,1.0009,1.0009,0,0,1-.86523-.49951.99992.99992,0,1,0-1.73242.999A2.99955,2.99955,0,0,0,18.05566,19a2.96481,2.96481,0,0,0-.18426-1h1.18426v3a1,1,0,0,0,2,0V14a1,1,0,1,0,0-2ZM9.08594,11.24268a.99963.99963,0,1,0,1.93945-.48536L9.26855,3.72754a2.28044,2.28044,0,0,0-4.4248,0L3.08594,10.75732a.99963.99963,0,1,0,1.93945.48536L5.58618,9H8.52545ZM6.0863,7l.6969-2.78711a.29222.29222,0,0,1,.5459,0L8.02563,7Zm7.96936,0h1a1.001,1.001,0,0,1,1,1V9a1,1,0,0,0,2,0V8a3.00328,3.00328,0,0,0-3-3h-1a1,1,0,0,0,0,2Zm-4,9h-1a1.001,1.001,0,0,1-1-1V14a1,1,0,0,0-2,0v1a3.00328,3.00328,0,0,0,3,3h1a1,1,0,0,0,0-2Z" />
                    </svg>
                    Fluent-ish with
                </h2>
                <ul className="text-lg list-disc list-inside ml-3">
                    <li>English</li>
                    <li>Hindi <span className="opacity-75 font-semibold">[ हिन्दी ]</span></li>
                    <li>Maithili <span className="opacity-75 font-semibold">[ মৈথিলী ] <span className="text-xs text-primary font-[300]">native</span></span></li>
                    <li>Nepali <span className="opacity-75 font-semibold">[ नेपाली ]</span></li>
                </ul>
            </div>
        </>
    );
};

export default About;
