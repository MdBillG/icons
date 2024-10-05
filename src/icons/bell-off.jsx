import React from "react";

const BellOff = ({ size, color, thickness }) => {
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
            <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" />
            <path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            <path d="m2 2 20 20" />
        </svg>
    );
};

export default BellOff;
