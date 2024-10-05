import React from "react";

const BluetoothConnected = ({ size, color, thickness }) => {
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
            <path d="m7 7 10 10-5 5V2l5 5L7 17" />
            <line x1="18" x2="21" y1="12" y2="12" />
            <line x1="3" x2="6" y1="12" y2="12" />
        </svg>
    );
};

export default BluetoothConnected;
