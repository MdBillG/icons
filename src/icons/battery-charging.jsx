import React from "react";

const BatteryCharging = ({ size, color, thickness }) => {
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
            <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
            <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
            <path d="m11 7-3 5h4l-3 5" />
            <line x1="22" x2="22" y1="11" y2="13" />
        </svg>
    );
};

export default BatteryCharging;
