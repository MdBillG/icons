import React from 'react';

const Sphere = ({ size = 100, color = '#000s000' }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="sphereGradient" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor={color} stopOpacity="1" />
                <stop offset="100%" stopColor={color} stopOpacity="0.6" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#sphereGradient)" />
        <ellipse cx="35" cy="35" rx="10" ry="7" fill="#ffffff" fillOpacity="0.4" />
    </svg>
);

export default Sphere;