import React from "react";

const ArrowcircleOutLeft = ({ size, color, thickness }) => {
    const defaultsize = size ? size : "24"
    const defaultColor = color ? color : "currentColor"
    const defaultThickness = thickness ? thickness : "2"
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={defaultsize}
                height={defaultsize}
                viewBox="0 0 24 24"
                fill="none"
                stroke={defaultColor}
                strokeWidth={defaultThickness}
                strokeLinecap="round"
                strokeLinejoin="round"
                class="arrow-arrow-out-down-left"
            >
                <path d="M2 12a10 10 0 1 1 10 10" />
                <path d="m2 22 10-10" />
                <path d="M8 22H2v-6" />
            </svg>
        </div>
    );
};

export default ArrowcircleOutLeft;
