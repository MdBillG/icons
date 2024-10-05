import React from "react";

const ArrowCircleOutRight = ({ size, color, thickness }) => {
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
            class="lucide lucide-circle-arrow-out-down-right"
        >
            <path d="M12 22a10 10 0 1 1 10-10" />
            <path d="M22 22 12 12" />
            <path d="M22 16v6h-6" />
        </svg>
    );
};

export default ArrowCircleOutRight;
