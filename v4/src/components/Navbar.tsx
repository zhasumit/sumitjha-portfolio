"use client";

import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import SumitJha from "./icons/SumitJha";

const Navbar = () => {
    return (
        <nav className="bg-base-100 border-b border-base-200 p-2 flex items-center justify-between my-1">
            <Link href="/" className="flex items-center gap-2">
                <SumitJha />
            </Link>
            <ThemeSelector />
        </nav>
    );
};

export default Navbar;
