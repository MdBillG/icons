import React from "react";

const BatteryWarning = ({ size, color, thickness }) => {
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
            <path d="M10 17h.01" />
            <path d="M10 7v6" />
            <path d="M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
            <path d="M22 11v2" />
            <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        </svg>
    );
};

export default BatteryWarning;
