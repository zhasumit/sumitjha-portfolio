"use client";

import Image from "next/image";
import localFont from "next/font/local";
import Badge from "./BadgeComponent";
import { GrGithub } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { File, MapPinHouse } from "lucide-react";

const headerFont = localFont({
    src: "../fonts/PPPangaia-Bold.otf",
})

const Hero = () => {
    return (<>
        <section className="flex items-center">
            <div className="min-w-56">
                <Image
                    src="/icons/sumitjha.png"
                    alt="Sumit"
                    width={240}
                    height={240}
                    className="rounded-full shadow-xl"
                />
            </div>
            <div className="pl-4">
                <div className={`${headerFont.className} text-7xl`}>
                    Sumit Kumar Jha
                </div>
                <div>Software Developer with hands-on experience building clean, scalable UIs, real-time features, and secure APIs. I work across the stack using Django, DRF, Next.js, and Rails — shipping fast, performant web apps that power serious business logic, tax workflows, and more.</div>
                {/* <div className="flex my-2 mt-3 gap-1"><MapPinHouse size={20} color="green" /> Noida, Uttar Pradesh, India</div> */}
                <div className="flex my-2 mt-3 gap-1">
                    <MapPinHouse size={20} className="text-primary" />
                    Noida, Uttar Pradesh, India
                </div>

                <div className="flex gap-2 mt-2">
                    <Badge icon={<GrGithub />} text="GitHub" />
                    <Badge icon={<FaLinkedinIn />} text="LinkedIn" />
                    <Badge icon={<BsTwitterX />} text="Twitter" />
                    <Badge icon={<MdAlternateEmail />} text="Gmail" />
                    <Badge icon={<File size={13} />} text="Resume" />
                </div>
            </div>
        </section>

    </>
    );
};

export default Hero;
