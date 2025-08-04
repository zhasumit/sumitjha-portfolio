"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const headerFont = localFont({
    src: "../fonts/PPPangaia-Medium.otf",
})

const Hero = () => {
    return (
        <section className="border border-red-400 flex">

            <div className="border border-yellow-300">
                <Image
                    src="/icons/sumitjha.png" // Replace with your actual image
                    alt="Sumit"
                    width={240}
                    height={240}
                    className="rounded-full shadow-xl"
                />
            </div>
            <div className="border border-green-300">
                <div className={`${headerFont.className} text-8xl`}>
                    Sumit Kumar Jha
                </div>
            </div>
        </section>
    );
};

export default Hero;
