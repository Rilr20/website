import React from 'react'
import Image from "next/image";

export default function Albums({ albums }) {
    return (
        <div className="album-grid">
            {
                albums.topalbums.album.map(function (album, key) {
                    return <div key={key} className="album" >
                        <Image src={album.image[2]["#text"] ? album.image[2]["#text"] : '/img/160x160.webp'} objectFit='contain' sizes="100vw" width={0} height={0} alt={album.name} className="album-art" style={{ minWidth:"160px", width: 'auto', height: 'auto', maxWidth:"160px" }} />
                        <p className="album-title">{album.name.replace(/\[.*?\]/g, '')}</p>
                    </div>
                })
            } 
        </div>
    )
}
