import React from "react";

const Captions = ({ size, color, thickness }) => {
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
            <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
            <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
        </svg>
    );
};

export default Captions;
