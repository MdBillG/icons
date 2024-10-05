import React from "react";

const ArrowUp01 = ({ size, color, thickness }) => {
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
            <path d="m3 8 4-4 4 4" />
            <path d="M7 4v16" />
            <rect x="15" y="4" width="4" height="6" ry="2" />
            <path d="M17 20v-6h-2" />
            <path d="M15 20h4" />
        </svg>
    );
};

export default ArrowUp01;
