"use client";

import { LucidePaintbrushVertical } from "lucide-react";
import { THEMES } from "../constants/themes";
import { useTheme } from "../hooks/useTheme";

const ThemeSelector = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="dropdown dropdown-end">
            <button
                tabIndex={0}
                className="text-primary-content"
            >
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-primary text-primary-content font-semibold">
                    <LucidePaintbrushVertical className="h-5 w-5" />
                </div>
            </button>
            <div
                tabIndex={0}
                className="dropdown-content mt-2 p-2 shadow-lg bg-base-200 rounded-xl w-44 max-h-64 overflow-y-auto"
            >
                {THEMES.map((t) => (
                    <button
                        key={t.name}
                        onClick={() => setTheme(t.name)}
                        className={`w-full text-left px-4 py-2 rounded-lg ${theme === t.name ? "bg-primary text-primary-content" : "hover:bg-base-300"
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSelector;
