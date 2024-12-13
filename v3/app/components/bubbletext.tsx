import React from 'react';

interface BubbleTextProps {
    word: string; // word is required and of type string
}

const BubbleText: React.FC<BubbleTextProps> = ({ word }) => {
    // Default value for word in case it is undefined or empty
    const displayWord = word;

    return (
        <div>
            <style>
                {`
          .hoverText {
            transition: 1s font-weight;
            transition: .5s color;
            display: inline;
          }

          .hoverText:hover {
            font-weight: 700;
            position: relative;
            color: #d1d5db;
          }

          /* To the right */
          .hoverText:hover+.hoverText {
            font-weight: 600;
            color: #e5e7eb;
            position: relative;
          }

          .hoverText:hover+.hoverText+.hoverText {
            font-weight: 500;
            color: #f3f4f6;
          }

          /* To the left */
          .hoverText:has(+ .hoverText:hover) {
            font-weight: 600;
            color: #e5e7eb;
            position: relative;
          }

          .hoverText:has(+ .hoverText + .hoverText:hover) {
            font-weight: 500;
            color: #f3f4f6;
          }

          h2 {
            display: inline-block;
            /* Make h2 behave like an inline element */
            font-weight: medium;
          }
        `}
            </style>
            <h2 className="font-medium">
                {displayWord.split("").map((child, idx) => (
                    <span className="hoverText" key={idx}>
                        {child}
                    </span>
                ))}
            </h2>
        </div>
    );
};

export default BubbleText;
