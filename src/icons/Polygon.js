import React from 'react';

const PolygonIcon = ({
    size = 24,
    color = 'currentColor',
    sides = 6,
    rotate = 0,
    strokeWidth = 2,
    ...props
}) => {
    const points = [];
    const angle = (Math.PI * 2) / sides;
    const radius = size / 2 - strokeWidth;

    for (let i = 0; i < sides; i++) {
        points.push([
            radius * Math.cos(angle * i - Math.PI / 2 + rotate) + size / 2,
            radius * Math.sin(angle * i - Math.PI / 2 + rotate) + size / 2
        ]);
    }

    const pointsString = points.map(point => point.join(',')).join(' ');

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            {...props}
        >
            <polygon points={pointsString} />
        </svg>
    );
};

export default PolygonIcon;