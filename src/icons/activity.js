import React from "react";

const Activity = ({ size, color, thickness }) => {
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
            class="lucide lucide-activity"
        >
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
        </svg>
    );
};

export default Activity;
