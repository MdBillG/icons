import React from "react";

const BatteryFull = ({ size, color, thickness }) => {
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
            <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
            <line x1="22" x2="22" y1="11" y2="13" />
            <line x1="6" x2="6" y1="11" y2="13" />
            <line x1="10" x2="10" y1="11" y2="13" />
            <line x1="14" x2="14" y1="11" y2="13" />
        </svg>
    );
};

export default BatteryFull;
