// components/Footer.tsx
"use client";

import { LocateIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            };
            setTime(new Intl.DateTimeFormat("en-IN", options).format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full mt-16 py-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
                <img src="/icons/Map.svg" alt="Location Icon" className="h-6 w-6" />
                <span className="text-base tracking-wider min-w-[80px] text-center">
                    {time}
                </span>
            </div>
        </footer>


    );
}
