import { useEffect, useState } from "react";

const THEME_KEY = "sumitjha";

export const useTheme = () => {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const stored = localStorage.getItem(THEME_KEY);
        const initial = stored || "corporate";
        setTheme(initial);
        document.documentElement.setAttribute("data-theme", initial);
    }, []);

    const updateTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return { theme, setTheme: updateTheme };
};