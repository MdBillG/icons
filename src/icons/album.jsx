import React from "react";

const Album = ({ size, color, thickness }) => {
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
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <polyline points="11 3 11 11 14 8 17 11 17 3" />
        </svg>
    );
};

export default Album;
