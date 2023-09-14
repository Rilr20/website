import React from 'react'

export default function LineSVG({ className, width, height, rotation = 0 }) {
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
            <rect width={width / 5} height={height} fill="#FBCA36" />
            <rect x={(width / 5) * 4} width={width / 5} height={height} fill="#6C1D40" />
            <rect x={(width / 5) * 3} width={width / 5} height={height} fill="#B31C3C" />
            <rect x={(width / 5) * 2} width={width / 5} height={height} fill="#F73C28" />
            <rect x={(width / 5)} width={width / 5} height={height} fill="#F5691E" />
        </svg>


    )
}
