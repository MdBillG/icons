import React, { useState, useEffect } from 'react';

const AnimatedActivity = ({ size = "24", color = "currentColor", thickness = "2" }) => {
    const [gradientPosition, setGradientPosition] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setGradientPosition((prevPosition) => (prevPosition + 25) % 200);
        }, 500); // Adjust for speed of animation

        return () => clearInterval(intervalId);
    }, []);

    const gradientId = `heartbeat-gradient-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={thickness}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-activity"
        >
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset={`${gradientPosition}%`} stopColor={color} stopOpacity="1" />
                    <stop offset={`${Math.min(gradientPosition + 50, 100)}%`} stopColor={color} stopOpacity="0.2" />
                </linearGradient>
            </defs>
            <path
                d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                stroke={`url(#${gradientId})`}
            />
        </svg>
    );
};

export default AnimatedActivity;