import React from 'react'
import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className='parent'>
                <div className='grid-div div1'></div>
                <div className='grid-div div2'>
                    <h1 className="title title-top">RI</h1>
                    <h1 className="title title-bottom">LR</h1>
                </div>
                <div className='grid-div div3'></div>
                <div className='grid-div div4'></div>
                <div className='grid-div div5'></div>
                <div className='grid-div div6'>
                    <ul className="menu">
                        <li><Link href="#home">Me</Link></li>
                    </ul>
                </div>
                <div className='grid-div div7'>
                    <ul className="menu">
                        <li><Link href="#about">About</Link></li>
                    </ul>
                </div>
                <div className='grid-div div8'>
                    <ul className="menu">
                        <li><Link href="#project">Projekt</Link></li>
                    </ul>
                </div>
                <div className='grid-div div9'></div>
            </div>
            <div>
            </div>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <h1 style={{ marginLeft: "1em" }} className="burger-menu title title-top">RI</h1>
            <h1 style={{ marginLeft: "1em" }} className="burger-menu title title-bottom">LR</h1>
            <ul className="burger-menu menu">
                <li><Link href="#home">Me</Link></li>
            </ul>
            <ul className="burger-menu menu">
                <li><Link href="#about">About</Link></li>
            </ul>
            <ul className="burger-menu menu">
                <li><Link href="#project">Projekt</Link></li>
            </ul>
            {/* <ul className="burger-menu menu">
                <li><a href="#else">Else</a></li>
            </ul> */}
        </header>
    )
}
