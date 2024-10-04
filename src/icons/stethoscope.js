import React from "react";

const Stethoscope = ({ size, color, thickness }) => {
    const defaultsize = size ? size : "24"
    const deafultColor = color ? color : "currentColor"
    const deafultThickness = thickness ? thickness : "2"
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={defaultsize}
            height={defaultsize}
            viewBox="0 0 24 24"
            fill="none"
            stroke={deafultColor}
            stroke-width={deafultThickness}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stethoscope"
        >
            <path d="M11 2v2" />
            <path d="M5 2v2" />
            <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
            <path d="M8 15a6 6 0 0 0 12 0v-3" />
            <circle cx="20" cy="10" r="2" />
        </svg>
    );
};

export default Stethoscope;
