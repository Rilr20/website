import React from 'react'
import Image from "next/image";


export default function Steam({ steam }) {
    return (
        <div className='steam-game'>
            <Image src={steam.response.games[0].appid === "" ? '/img/160x75.webp' : `https://steamcdn-a.akamaihd.net/steam/apps/${steam.response.games[0].appid}/header.jpg`} alt="game header" width="160" height="75" />
            <Image src={steam.response.games[1].appid === "" ? '/img/160x75.webp' : `https://steamcdn-a.akamaihd.net/steam/apps/${steam.response.games[1].appid}/header.jpg`} alt="game header" width="160" height="75" />
        </div>
    )
}
