import tags from '@/data/tags.json';
import Sidequests from './Sidequests';

const About = () => {
    return (<>
        <div className="px-4 md:px-8">
            {/* About section */}
            <h2 className="text-3xl md:text-4xl font-bold mb-3">About</h2>
            <div className="flex justify-between">
                <div className="flex-1 space-y-3 mr-16">
                    <p className='text-lg'>
                        I’m Sumit. Computer Science Enginner from NIT-Allahabad,
                        which basically means I survived four years of deadlines, chai-fueled coding nights.
                    </p>

                    <p className='text-lg'>
                        I grew up in Ghatotand, Parej, Ramgarh, where most of my time was split between my grandfather’s stories and Holy Cross School’s homework.
                        Then I spent 2012–2019 in Nepal, adding yet another uniform to my collection before finally ending up in NIT-A India for college.
                        At this point, I’ve switched schools so often I could probably start a loyalty program.
                    </p>

                    <p className='text-lg'>
                        These days I spend my time messing shiny new tech which I
                        decides to waste my sleep schedule.
                    </p>

                    <p className='text-lg'>
                        Outside code i indulge in chain of watching anime, series and movies.
                        In short: code keeps me busy, anime and series keep me sane,
                        and sarcasm makes sure I don’t take any of it too seriously.
                        Could I *be* any more clear?
                    </p>

                </div>
                <div className="flex-shrink-0 flex items-center">
                    <img src="./gifs/totoro.gif" className="w-56 rounded-full" alt="" />
                </div>
            </div>

            {/* tags */}
            <h2 className="text-3xl font-bold mb-3 mt-8">Tags</h2>
            <div className="flex flex-wrap gap-1 select-none">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="badge badge-lg bg-primary/60 text-primary-content "
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Languages */}
            <h2 className="text-2xl font-bold mt-8 mb-2">Fluent-ish with</h2>
            <ul className="text-lg list-disc list-inside ml-3">
                <li>English</li>
                <li>Hindi <span className="opacity-75 font-semibold">[ हिन्दी ]</span></li>
                <li>Maithili <span className="opacity-75 font-semibold">[ মৈথিলী ]</span></li>
                <li>Nepali <span className="opacity-75 font-semibold">[ नेपाली ]</span></li>
            </ul>
        </div>
    </>
    );
};

export default About;
