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
            transition: 1.5s font-weight;
            transition: .2s font-size;
            transition: .5s color;
            display: inline;
            /* Ensure spans are inline */
          }

          .hoverText:hover {
            font-weight: 900;
            font-size:1.03em;
            position: relative;
            bottom: 2px;
            color: #334155;
          }

          /* To the right */
          .hoverText:hover+.hoverText {
            font-weight: 600;
            color: #475569;
            font-size:1.01em;
            position: relative;
            bottom: 1px;
          }

          .hoverText:hover+.hoverText+.hoverText {
            font-weight: 500;
            color: #64748b;
          }

          /* To the left */
          .hoverText:has(+ .hoverText:hover) {
            font-weight: 600;
            color: #475569;
            font-size:1.01em;
            position: relative;
            bottom: 1px;
          }

          .hoverText:has(+ .hoverText + .hoverText:hover) {
            font-weight: 500;
            color: #64748b;
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
