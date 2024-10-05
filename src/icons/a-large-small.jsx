import React from "react";

const largeSmallA = ({ size, color, thickness }) => {
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
            class="a-arrow-smallLarge"
        >
            <path d="M21 14h-5" />
            <path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
            <path d="M4.5 13h6" />
            <path d="m3 16 4.5-9 4.5 9" />
        </svg>
    );
};

export default largeSmallA;
