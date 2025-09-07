"use client";

import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import SumitJha from "./icons/SumitJha";

const Navbar = () => {
    return (
        <nav className="bg-base-100 border-b border-base-200 px-2 py-5 flex items-center justify-between my-3">
            <Link href="/" className="flex items-center gap-2">
                <SumitJha />
            </Link>
            <ThemeSelector />
        </nav>
    );
};

export default Navbar;
