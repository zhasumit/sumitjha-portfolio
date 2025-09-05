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
        <section className="flex items-center mt-14">
            <div className="min-w-56">
                <Image
                    src="/me/sumitjha.jpg"
                    alt="Sumit"
                    width={240}
                    height={240}
                    className="rounded-full shadow-xl border-2 border-primary/20"
                />
            </div>
            <div className="pl-10">
                <div className={`${headerFont.className} text-7xl`}>
                    <span className="cyan-highlight">Sumit</span> Kumar Jha
                </div>
                <div className="">Software Developer with hands-on experience building clean, scalable UIs, real-time features, and secure APIs. I work across the stack using Django, DRF, Next.js, and Rails — shipping fast, performant web apps that power serious business logic, tax workflows, and more.</div>
                <div className="flex my-2 mt-3 gap-1">
                    <PiHouseLineDuotone size={20} className=" mt-0.5 text-primary" />
                    Noida, Uttar Pradesh, India
                </div>

                <div className="flex gap-2 mt-2">
                    <a href="https://github.com/zhasumit/" target="_blank">
                        <Badge icon={<GrGithub color="gray" />} text="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/sumitjha1618/" target="_blank">
                        <Badge icon={<FaLinkedinIn color="#0077B5" />} text="LinkedIn" />
                    </a>
                    <a href="https://www.x.com/__sumitjha/" target="_blank">
                        <Badge icon={<BsTwitterX color="#000" size={12} />} text="Twitter" />
                    </a>
                    <a href="mailto:sumitjha1618@gmail.com" target="_blank">
                        <Badge icon={<PiMailboxDuotone color="Coral" />} text="Mail" />
                    </a >
                    <a href="https://drive.google.com/file/d/1LrUGlH_wrdqLusxDumFc7OEZWJWEgbpq/view?usp=sharing" target="_blank">
                        <Badge icon={<PiSuitcaseDuotone color="steelblue" />} text="Resume" />
                    </a>
                    <a href="https://discord.com/users/784362664037580841" target="_blank">
                        <Badge icon={<BsDiscord color="#5865F2" />} text="Discord" />
                    </a>
                    <a href="https://wa.me/7294043415" target="_blank">
                        <Badge icon={<ImWhatsapp color="green" />} text="whatsapp" />
                    </a>
                </div>
            </div>
        </section>

    </>
    );
};

export default Hero;
