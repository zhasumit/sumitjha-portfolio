"use client";

import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import SumitJha from "./icons/SumitJha";

const Navbar = () => {
    return (
        <nav className="bg-base-100 border-b border-base-300 px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <SumitJha />
            </Link>
            <ThemeSelector />
        </nav>
    );
};

export default Navbar;
