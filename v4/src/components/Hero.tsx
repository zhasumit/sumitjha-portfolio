import Image from "next/image";
import localFont from "next/font/local";
import { PiHouseLineDuotone } from "react-icons/pi";
import SocialLinks from "./SocialLinks";

const headerFont = localFont({
    src: "../fonts/PPPangaia-Bold.otf",
})

const Hero = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-6 sm:mt-8 md:mt-16 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {/* Profile Image - Responsive sizing and positioning */}
            <div className="relative flex-shrink-0 w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden shadow-lg sm:shadow-xl border-2 border-primary/20 flex justify-center items-center order-1 lg:order-none">
                <Image
                    src="/me/sumitjha.jpg"
                    alt="Sumit Kumar Jha - Software Developer"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    priority
                />
            </div>

            {/* Text content - Responsive typography and spacing */}
            <div className="w-full text-center lg:text-left order-2 lg:order-none">
                {/* Name - Fully responsive typography */}
                <div className={`${headerFont.className} leading-tight`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
                        <span className="cyan-highlight">Sumit</span>{' '}
                        <span className="block xs:inline sm:block md:inline lg:block xl:inline">
                            Kumar Jha
                        </span>
                    </h1>
                </div>

                {/* Description - Responsive text and spacing */}
                <div className="text-base sm:text-lg lg:text-xl xl:text-xl mt-2 px-2 xs:px-4 sm:px-6 md:px-8 lg:px-0 leading-normal text-base-content">
                    Software Developer with hands-on experience building clean, scalable UIs, real-time features, and secure APIs. I work across the stack using Django, DRF, Next.js, and Rails — shipping fast, performant web apps that power serious business logic, tax workflows, and more.
                </div>

                {/* Location - Responsive icon and text */}
                <div className="flex justify-center lg:justify-start items-center my-4 gap-1 xs:gap-1.5 sm:gap-2">
                    <PiHouseLineDuotone
                        size={16}
                        className="w-5 h-5 xl:w-6 xl:h-6 text-primary flex-shrink-0"
                    />
                    <span className="text-base md:text-xl text-primary/80 mt-1">
                        Noida, Uttar Pradesh, India
                    </span>
                </div>

                {/* Social Links - Now using the separate component */}
                <SocialLinks />
            </div>
        </section>
    );
};

export default Hero;