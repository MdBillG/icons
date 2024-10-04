import React from "react";

const Wifi = ({ size, color, thickness }) => {
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
            class="lucide lucide-wifi"
        >
            <path d="M12 20h.01" />
            <path d="M2 8.82a15 15 0 0 1 20 0" />
            <path d="M5 12.859a10 10 0 0 1 14 0" />
            <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        </svg>
    );
};

export default Wifi;
