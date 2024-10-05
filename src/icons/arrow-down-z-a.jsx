import React from "react";

const ArrowdownZA = ({ size, color, thickness }) => {
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
            <path d="m3 16 4 4 4-4" />
            <path d="M7 4v16" />
            <path d="M15 4h5l-5 6h5" />
            <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
            <path d="M20 18h-5" />
        </svg>
    );
};

export default ArrowdownZA;
