import React from "react";

const HousePlus = ({ size, color, thickness }) => {
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
            strokeWidth={deafultThickness}
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-house-plus"
        >
            <path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354" />
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M15 6h6" />
            <path d="M18 3v6" />
        </svg>
    );
};

export default HousePlus;
