import React from 'react'

export default function SleeveSVG({ className, width=100, height=331, rotation = 0 }) {
    console.log((width / 5 + width / 5) * 2);
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotation}deg)` }}>
            <path d="M0 85H100V246H0V85Z" fill="#222423" />
            <path d="M0 246.053H100V330.999L0 246.053Z" fill="#222423" />
            <path d="M0 246.053H100V330.999L0 246.053Z" fill="#222423" />
            <path d="M0 84.9454H100V0L0 84.9454Z" fill="#222423" />
            <path d="M0 84.9454H100V0L0 84.9454Z" fill="#222423" />
        </svg>


    )
}
