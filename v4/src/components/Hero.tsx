"use client";

import Image from "next/image";
import localFont from "next/font/local";
import Badge from "./BadgeComponent";
import { GrGithub } from "react-icons/gr";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { File, MapPinHouse } from "lucide-react";
import { PiHouseLineDuotone, PiMailboxDuotone, PiSuitcaseDuotone, PiWhatsappLogoDuotone } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";

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
            <div className="pl-10">
                <div className={`${headerFont.className} text-7xl`}>
                    Sumit Kumar Jha
                </div>
                <div>Software Developer with hands-on experience building clean, scalable UIs, real-time features, and secure APIs. I work across the stack using Django, DRF, Next.js, and Rails — shipping fast, performant web apps that power serious business logic, tax workflows, and more.</div>
                <div className="flex my-2 mt-3 gap-1">
                    <PiHouseLineDuotone size={20} className="text-primary" />
                    Noida, Uttar Pradesh, India
                </div>

                <div className="flex gap-2 mt-2">
                    <Badge icon={<GrGithub color="gray" />} text="GitHub" />
                    <Badge icon={<FaLinkedinIn color="#0077B5" />} text="LinkedIn" />
                    <Badge icon={<BsTwitterX color="#000" size={12} />} text="Twitter" />
                    <Badge icon={<PiMailboxDuotone color="Coral" />} text="Mail" />
                    <Badge icon={<PiSuitcaseDuotone color="steelblue" />} text="Resume" />
                    <Badge icon={<BsDiscord color="#5865F2" />} text="Discord" />
                    <Badge icon={<ImWhatsapp color="green" />} text="whatsapp" />
                </div>
            </div>
        </section>

    </>
    );
};

export default Hero;
