import React from "react";

const Annoyed = ({ size, color, thickness }) => {
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
            class="air-play"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15h8" />
            <path d="M8 9h2" />
            <path d="M14 9h2" />
        </svg>
    );
};

export default Annoyed;
