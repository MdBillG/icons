import React from "react";

const ArowUpA = ({ size, color, thickness }) => {
    const defaultSize = size || "24";
    const defaultColor = color || "currentColor";
    const defaultThickness = thickness || "2";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={defaultSize}
            height={defaultSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke={defaultColor}
            strokeWidth={defaultThickness}
            strokeLinecap="round"
            strokeLinejoin="round"
            class="a-arrow-up">
            <path d="M3.5 13h6" />
            <path d="m2 16 4.5-9 4.5 9" />
            <path d="M18 16V7" />
            <path d="m14 11 4-4 4 4" />
        </svg>
    );
};

export default ArowUpA;
