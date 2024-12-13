import React, { useState } from "react";
import "./styles/scrambleEffect.css"; // Importing CSS file

const letters = "ABC&DE#$FGH*()IJKLM@NOP%^QRSTUVWXYZ!";

interface ScrambleEffectProps {
    originalWord: string;
    finalWord: string;
}

const ScrambleEffect: React.FC<ScrambleEffectProps> = ({ originalWord, finalWord }) => {
    const [displayText, setDisplayText] = useState(originalWord);

    const startScramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText((currentText) =>
                currentText
                    .split("")
                    .map((letter, index) => {
                        if (index < Math.floor(iteration)) {
                            return finalWord[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= finalWord.length) {
                clearInterval(interval);
                setDisplayText(finalWord); // Ensure it stops cleanly on the final word
            }

            iteration += 1; // Faster iteration increment
        }, 20); // Shorter interval for faster completion
    };

    return (
        <h1
            onMouseEnter={startScramble}
            className="scramble-effect inline-block hover:text-yellow-100"
        >
            {displayText}
        </h1>
    );
};

export default ScrambleEffect;
