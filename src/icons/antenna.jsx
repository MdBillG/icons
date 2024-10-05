import React from "react";

const Antenna = ({ size, color, thickness }) => {
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
            <path d="M2 12 7 2" />
            <path d="m7 12 5-10" />
            <path d="m12 12 5-10" />
            <path d="m17 12 5-10" />
            <path d="M4.5 7h15" />
            <path d="M12 16v6" />
        </svg>
    );
};

export default Antenna;
