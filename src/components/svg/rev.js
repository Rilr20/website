import React from 'react'

export default function RevSVG({ className, width, height, rotation= 0 }) {

    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotation}deg)` }}>
            <path d="M50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -7.62939e-06L50 -3.25826e-06L50 50Z" fill="#6C1D40" />
            <path d="M50 40C44.7471 40 39.5457 38.9654 34.6927 36.9552C29.8396 34.945 25.4301 31.9986 21.7157 28.2843C18.0014 24.5699 15.055 20.1604 13.0448 15.3073C11.0346 10.4543 10 5.25287 10 -6.75517e-06L50 -3.25826e-06V40Z" fill="#B31C3C" />
            <path d="M50 30C46.0603 30 42.1593 29.224 38.5195 27.7164C34.8797 26.2087 31.5726 23.999 28.7868 21.2132C26.001 18.4274 23.7913 15.1203 22.2836 11.4805C20.776 7.84073 20 3.93965 20 -5.88094e-06L50 -3.25826e-06V30Z" fill="#F73C28" />
            <path d="M50 20C47.3736 20 44.7728 19.4827 42.3463 18.4776C39.9198 17.4725 37.715 15.9993 35.8579 14.1421C34.0007 12.285 32.5275 10.0802 31.5224 7.65366C30.5173 5.22715 30 2.62643 30 -5.00671e-06L50 -3.25826e-06V20Z" fill="#F5691E" />
            <path d="M50 10C48.6868 10 47.3864 9.74134 46.1732 9.23879C44.9599 8.73624 43.8575 7.99965 42.9289 7.07106C42.0003 6.14248 41.2638 5.04009 40.7612 3.82683C40.2587 2.61357 40 1.31321 40 -4.13248e-06L50 -3.25826e-06V10Z" fill="#FBCA36" />
        </svg>
    )
}
